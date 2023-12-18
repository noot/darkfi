use std::time::{SystemTime, UNIX_EPOCH};

use crate::{
    ethereum::swap_creator::SwapCreator,
    protocol::{
        initiator::Event,
        traits::{CounterpartyKeys, InitiateSwapArgs, InitiationArgs, InitiatorEventWatcher},
    },
};
use ethers::prelude::Middleware;
use eyre::{eyre, Result};
use smol::stream::StreamExt as _;
use tokio::sync::{mpsc::Sender, oneshot::Receiver};

pub(crate) struct Watcher;

#[darkfi_serial::async_trait]
impl InitiatorEventWatcher for Watcher {
    async fn run_received_counterparty_keys_watcher(
        event_tx: Sender<Event>,
        counterparty_keys_rx: Receiver<CounterpartyKeys>,
        args: InitiationArgs,
    ) -> Result<()> {
        println!("waiting for counterparty keys");
        let counterparty_keys = counterparty_keys_rx.await?;

        let refund_commitment = ethers::utils::keccak256(&counterparty_keys.secp256k1_public_key);

        let args = InitiateSwapArgs {
            claim_commitment: args.claim_commitment,
            refund_commitment,
            claimer: args.claimer,
            timeout_duration_1: args.timeout_duration_1,
            timeout_duration_2: args.timeout_duration_2,
            asset: args.asset,
            value: args.value,
            nonce: args.nonce,
        };

        println!("sending received counterparty keys event");
        event_tx.send(Event::ReceivedCounterpartyKeys(args)).await.unwrap();
        Ok(())
    }

    async fn run_counterparty_funds_locked_watcher(event_tx: Sender<Event>) -> Result<()> {
        // TODO: from watching counterchain swap wallet
        event_tx.send(Event::CounterpartyFundsLocked).await.unwrap();
        Ok(())
    }

    async fn run_counterparty_funds_claimed_watcher<M: Middleware>(
        event_tx: Sender<Event>,
        contract: SwapCreator<M>,
        contract_swap_id: &[u8; 32],
        from_block: u64,
    ) -> Result<()> {
        let topic1: ethers::types::U256 = contract_swap_id.into();
        let events = contract
            .claimed_filter() // claimed event sig is topic0
            .from_block(from_block)
            .address(contract.address().into())
            .topic1(topic1);

        let mut stream = events.stream().await.unwrap().with_meta();

        // we listen for the first event, as there can only be one event
        // that matches the filter (ie. has the same swap_id)
        let Some(Ok((event, _meta))) = stream.next().await else {
            eyre::bail!("listening to Claimed event stream failed")
        };

        event_tx.send(Event::CounterpartyFundsClaimed(event.s)).await.unwrap();
        Ok(())
    }

    async fn run_timeout_1_watcher(
        event_tx: Sender<Event>,
        timeout_1: u64,
        buffer_seconds: u64,
    ) -> Result<()> {
        let now = SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_secs();
        let diff = timeout_1
            .checked_sub(now)
            .ok_or(eyre!("timeout_1 is in the past"))?
            .checked_sub(buffer_seconds)
            .ok_or(eyre!("timeout_1 is too close to now"))?;
        let sleep_duration = tokio::time::Duration::from_secs(diff);

        tokio::time::sleep(sleep_duration).await;
        event_tx.send(Event::AlmostTimeout1).await.unwrap();
        Ok(())
    }

    async fn run_timeout_2_watcher(event_tx: Sender<Event>, timeout_2: u64) -> Result<()> {
        let now = SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_secs();
        let diff = timeout_2.checked_sub(now).ok_or(eyre!("timeout_2 is in the past"))?;
        let sleep_duration = tokio::time::Duration::from_secs(diff);

        tokio::time::sleep(sleep_duration).await;
        event_tx.send(Event::PastTimeout2).await.unwrap();
        Ok(())
    }
}
