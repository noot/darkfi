(function() {var type_impls = {
"darkfi_sdk":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AddAssign-for-Blind%3CF%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/darkfi_sdk/crypto/blind.rs.html#66-71\">source</a><a href=\"#impl-AddAssign-for-Blind%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F: <a class=\"trait\" href=\"darkfi_sdk/crypto/pasta_prelude/trait.Field.html\" title=\"trait darkfi_sdk::crypto::pasta_prelude::Field\">Field</a> + <a class=\"trait\" href=\"darkfi_sdk/crypto/blind/trait.EncDecode.html\" title=\"trait darkfi_sdk::crypto::blind::EncDecode\">EncDecode</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.AddAssign.html\" title=\"trait core::ops::arith::AddAssign\">AddAssign</a> for <a class=\"struct\" href=\"darkfi_sdk/crypto/blind/struct.Blind.html\" title=\"struct darkfi_sdk::crypto::blind::Blind\">Blind</a>&lt;F&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.add_assign\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/darkfi_sdk/crypto/blind.rs.html#68-70\">source</a><a href=\"#method.add_assign\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.AddAssign.html#tymethod.add_assign\" class=\"fn\">add_assign</a>(&amp;mut self, other: Self)</h4></section></summary><div class='docblock'>Performs the <code>+=</code> operation. <a href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.AddAssign.html#tymethod.add_assign\">Read more</a></div></details></div></details>","AddAssign","darkfi_sdk::crypto::blind::BaseBlind","darkfi_sdk::crypto::blind::ScalarBlind"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AsyncDecodable-for-Blind%3CF%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/darkfi_sdk/crypto/blind.rs.html#42\">source</a><a href=\"#impl-AsyncDecodable-for-Blind%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F: <a class=\"trait\" href=\"darkfi_sdk/crypto/pasta_prelude/trait.Field.html\" title=\"trait darkfi_sdk::crypto::pasta_prelude::Field\">Field</a> + <a class=\"trait\" href=\"darkfi_sdk/crypto/blind/trait.EncDecode.html\" title=\"trait darkfi_sdk::crypto::blind::EncDecode\">EncDecode</a>&gt; <a class=\"trait\" href=\"darkfi_serial/async_lib/trait.AsyncDecodable.html\" title=\"trait darkfi_serial::async_lib::AsyncDecodable\">AsyncDecodable</a> for <a class=\"struct\" href=\"darkfi_sdk/crypto/blind/struct.Blind.html\" title=\"struct darkfi_sdk::crypto::blind::Blind\">Blind</a>&lt;F&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.decode_async\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/darkfi_sdk/crypto/blind.rs.html#42\">source</a><a href=\"#method.decode_async\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"darkfi_serial/async_lib/trait.AsyncDecodable.html#tymethod.decode_async\" class=\"fn\">decode_async</a>&lt;'life0, 'async_trait, D&gt;(\n    d: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'life0 mut D</a>\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/std/io/error/type.Result.html\" title=\"type std::io::error::Result\">Result</a>&lt;Self&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<div class=\"where\">where\n    D: 'async_trait + AsyncRead + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    Self: 'async_trait,\n    'life0: 'async_trait,</div></h4></section></div></details>","AsyncDecodable","darkfi_sdk::crypto::blind::BaseBlind","darkfi_sdk::crypto::blind::ScalarBlind"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AsyncEncodable-for-Blind%3CF%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/darkfi_sdk/crypto/blind.rs.html#42\">source</a><a href=\"#impl-AsyncEncodable-for-Blind%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F: <a class=\"trait\" href=\"darkfi_sdk/crypto/pasta_prelude/trait.Field.html\" title=\"trait darkfi_sdk::crypto::pasta_prelude::Field\">Field</a> + <a class=\"trait\" href=\"darkfi_sdk/crypto/blind/trait.EncDecode.html\" title=\"trait darkfi_sdk::crypto::blind::EncDecode\">EncDecode</a>&gt; <a class=\"trait\" href=\"darkfi_serial/async_lib/trait.AsyncEncodable.html\" title=\"trait darkfi_serial::async_lib::AsyncEncodable\">AsyncEncodable</a> for <a class=\"struct\" href=\"darkfi_sdk/crypto/blind/struct.Blind.html\" title=\"struct darkfi_sdk::crypto::blind::Blind\">Blind</a>&lt;F&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode_async\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/darkfi_sdk/crypto/blind.rs.html#42\">source</a><a href=\"#method.encode_async\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"darkfi_serial/async_lib/trait.AsyncEncodable.html#tymethod.encode_async\" class=\"fn\">encode_async</a>&lt;'life0, 'life1, 'async_trait, S&gt;(\n    &amp;'life0 self,\n    s: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'life1 mut S</a>\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/std/io/error/type.Result.html\" title=\"type std::io::error::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<div class=\"where\">where\n    S: 'async_trait + AsyncWrite + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    Self: 'async_trait,\n    'life0: 'async_trait,\n    'life1: 'async_trait,</div></h4></section></summary><div class='docblock'>Asynchronously encode an object with a well-defined format.\nShould only ever error if the underlying <code>AsyncWrite</code> errors.\nReturns the number of bytes written on success.</div></details></div></details>","AsyncEncodable","darkfi_sdk::crypto::blind::BaseBlind","darkfi_sdk::crypto::blind::ScalarBlind"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Blind%3CF%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/darkfi_sdk/crypto/blind.rs.html#45-55\">source</a><a href=\"#impl-Blind%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F: <a class=\"trait\" href=\"darkfi_sdk/crypto/pasta_prelude/trait.Field.html\" title=\"trait darkfi_sdk::crypto::pasta_prelude::Field\">Field</a> + <a class=\"trait\" href=\"darkfi_sdk/crypto/blind/trait.EncDecode.html\" title=\"trait darkfi_sdk::crypto::blind::EncDecode\">EncDecode</a>&gt; <a class=\"struct\" href=\"darkfi_sdk/crypto/blind/struct.Blind.html\" title=\"struct darkfi_sdk::crypto::blind::Blind\">Blind</a>&lt;F&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"associatedconstant.ZERO\" class=\"associatedconstant\"><a class=\"src rightside\" href=\"src/darkfi_sdk/crypto/blind.rs.html#46\">source</a><h4 class=\"code-header\">pub const <a href=\"darkfi_sdk/crypto/blind/struct.Blind.html#associatedconstant.ZERO\" class=\"constant\">ZERO</a>: Self = _</h4></section><section id=\"method.random\" class=\"method\"><a class=\"src rightside\" href=\"src/darkfi_sdk/crypto/blind.rs.html#48-50\">source</a><h4 class=\"code-header\">pub fn <a href=\"darkfi_sdk/crypto/blind/struct.Blind.html#tymethod.random\" class=\"fn\">random</a>(rng: &amp;mut (impl <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand_core/trait.CryptoRng.html\" title=\"trait rand_core::CryptoRng\">CryptoRng</a> + <a class=\"trait\" href=\"https://rust-random.github.io/rand/rand_core/trait.RngCore.html\" title=\"trait rand_core::RngCore\">RngCore</a>)) -&gt; Self</h4></section><section id=\"method.inner\" class=\"method\"><a class=\"src rightside\" href=\"src/darkfi_sdk/crypto/blind.rs.html#52-54\">source</a><h4 class=\"code-header\">pub fn <a href=\"darkfi_sdk/crypto/blind/struct.Blind.html#tymethod.inner\" class=\"fn\">inner</a>(&amp;self) -&gt; F</h4></section></div></details>",0,"darkfi_sdk::crypto::blind::BaseBlind","darkfi_sdk::crypto::blind::ScalarBlind"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Blind%3CF%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/darkfi_sdk/crypto/blind.rs.html#42\">source</a><a href=\"#impl-Clone-for-Blind%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"darkfi_sdk/crypto/pasta_prelude/trait.Field.html\" title=\"trait darkfi_sdk::crypto::pasta_prelude::Field\">Field</a> + <a class=\"trait\" href=\"darkfi_sdk/crypto/blind/trait.EncDecode.html\" title=\"trait darkfi_sdk::crypto::blind::EncDecode\">EncDecode</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"darkfi_sdk/crypto/blind/struct.Blind.html\" title=\"struct darkfi_sdk::crypto::blind::Blind\">Blind</a>&lt;F&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/darkfi_sdk/crypto/blind.rs.html#42\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"darkfi_sdk/crypto/blind/struct.Blind.html\" title=\"struct darkfi_sdk::crypto::blind::Blind\">Blind</a>&lt;F&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","darkfi_sdk::crypto::blind::BaseBlind","darkfi_sdk::crypto::blind::ScalarBlind"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Blind%3CF%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/darkfi_sdk/crypto/blind.rs.html#42\">source</a><a href=\"#impl-Debug-for-Blind%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"darkfi_sdk/crypto/pasta_prelude/trait.Field.html\" title=\"trait darkfi_sdk::crypto::pasta_prelude::Field\">Field</a> + <a class=\"trait\" href=\"darkfi_sdk/crypto/blind/trait.EncDecode.html\" title=\"trait darkfi_sdk::crypto::blind::EncDecode\">EncDecode</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"darkfi_sdk/crypto/blind/struct.Blind.html\" title=\"struct darkfi_sdk::crypto::blind::Blind\">Blind</a>&lt;F&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/darkfi_sdk/crypto/blind.rs.html#42\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"type\" href=\"https://doc.rust-lang.org/nightly/core/fmt/type.Result.html\" title=\"type core::fmt::Result\">Result</a></h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","darkfi_sdk::crypto::blind::BaseBlind","darkfi_sdk::crypto::blind::ScalarBlind"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decodable-for-Blind%3CF%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/darkfi_sdk/crypto/blind.rs.html#42\">source</a><a href=\"#impl-Decodable-for-Blind%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F: <a class=\"trait\" href=\"darkfi_sdk/crypto/pasta_prelude/trait.Field.html\" title=\"trait darkfi_sdk::crypto::pasta_prelude::Field\">Field</a> + <a class=\"trait\" href=\"darkfi_sdk/crypto/blind/trait.EncDecode.html\" title=\"trait darkfi_sdk::crypto::blind::EncDecode\">EncDecode</a>&gt; <a class=\"trait\" href=\"darkfi_serial/trait.Decodable.html\" title=\"trait darkfi_serial::Decodable\">Decodable</a> for <a class=\"struct\" href=\"darkfi_sdk/crypto/blind/struct.Blind.html\" title=\"struct darkfi_sdk::crypto::blind::Blind\">Blind</a>&lt;F&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"method.decode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/darkfi_sdk/crypto/blind.rs.html#42\">source</a><a href=\"#method.decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"darkfi_serial/trait.Decodable.html#tymethod.decode\" class=\"fn\">decode</a>&lt;D: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt;(d: D) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;</h4></section></div></details>","Decodable","darkfi_sdk::crypto::blind::BaseBlind","darkfi_sdk::crypto::blind::ScalarBlind"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encodable-for-Blind%3CF%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/darkfi_sdk/crypto/blind.rs.html#42\">source</a><a href=\"#impl-Encodable-for-Blind%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F: <a class=\"trait\" href=\"darkfi_sdk/crypto/pasta_prelude/trait.Field.html\" title=\"trait darkfi_sdk::crypto::pasta_prelude::Field\">Field</a> + <a class=\"trait\" href=\"darkfi_sdk/crypto/blind/trait.EncDecode.html\" title=\"trait darkfi_sdk::crypto::blind::EncDecode\">EncDecode</a>&gt; <a class=\"trait\" href=\"darkfi_serial/trait.Encodable.html\" title=\"trait darkfi_serial::Encodable\">Encodable</a> for <a class=\"struct\" href=\"darkfi_sdk/crypto/blind/struct.Blind.html\" title=\"struct darkfi_sdk::crypto::blind::Blind\">Blind</a>&lt;F&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/darkfi_sdk/crypto/blind.rs.html#42\">source</a><a href=\"#method.encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"darkfi_serial/trait.Encodable.html#tymethod.encode\" class=\"fn\">encode</a>&lt;S: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/io/trait.Write.html\" title=\"trait std::io::Write\">Write</a>&gt;(&amp;self, s: S) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Encode an object with a well-defined format.\nShould only ever error if the underlying <code>Write</code> errors.\nReturns the number of bytes written on success.</div></details></div></details>","Encodable","darkfi_sdk::crypto::blind::BaseBlind","darkfi_sdk::crypto::blind::ScalarBlind"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-Blind%3CF%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/darkfi_sdk/crypto/blind.rs.html#42\">source</a><a href=\"#impl-PartialEq-for-Blind%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> + <a class=\"trait\" href=\"darkfi_sdk/crypto/pasta_prelude/trait.Field.html\" title=\"trait darkfi_sdk::crypto::pasta_prelude::Field\">Field</a> + <a class=\"trait\" href=\"darkfi_sdk/crypto/blind/trait.EncDecode.html\" title=\"trait darkfi_sdk::crypto::blind::EncDecode\">EncDecode</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"darkfi_sdk/crypto/blind/struct.Blind.html\" title=\"struct darkfi_sdk::crypto::blind::Blind\">Blind</a>&lt;F&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/darkfi_sdk/crypto/blind.rs.html#42\">source</a><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"darkfi_sdk/crypto/blind/struct.Blind.html\" title=\"struct darkfi_sdk::crypto::blind::Blind\">Blind</a>&lt;F&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#263\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","darkfi_sdk::crypto::blind::BaseBlind","darkfi_sdk::crypto::blind::ScalarBlind"],["<section id=\"impl-Copy-for-Blind%3CF%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/darkfi_sdk/crypto/blind.rs.html#42\">source</a><a href=\"#impl-Copy-for-Blind%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"darkfi_sdk/crypto/pasta_prelude/trait.Field.html\" title=\"trait darkfi_sdk::crypto::pasta_prelude::Field\">Field</a> + <a class=\"trait\" href=\"darkfi_sdk/crypto/blind/trait.EncDecode.html\" title=\"trait darkfi_sdk::crypto::blind::EncDecode\">EncDecode</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"darkfi_sdk/crypto/blind/struct.Blind.html\" title=\"struct darkfi_sdk::crypto::blind::Blind\">Blind</a>&lt;F&gt;</h3></section>","Copy","darkfi_sdk::crypto::blind::BaseBlind","darkfi_sdk::crypto::blind::ScalarBlind"],["<section id=\"impl-Eq-for-Blind%3CF%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/darkfi_sdk/crypto/blind.rs.html#42\">source</a><a href=\"#impl-Eq-for-Blind%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"darkfi_sdk/crypto/pasta_prelude/trait.Field.html\" title=\"trait darkfi_sdk::crypto::pasta_prelude::Field\">Field</a> + <a class=\"trait\" href=\"darkfi_sdk/crypto/blind/trait.EncDecode.html\" title=\"trait darkfi_sdk::crypto::blind::EncDecode\">EncDecode</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"darkfi_sdk/crypto/blind/struct.Blind.html\" title=\"struct darkfi_sdk::crypto::blind::Blind\">Blind</a>&lt;F&gt;</h3></section>","Eq","darkfi_sdk::crypto::blind::BaseBlind","darkfi_sdk::crypto::blind::ScalarBlind"],["<section id=\"impl-StructuralPartialEq-for-Blind%3CF%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/darkfi_sdk/crypto/blind.rs.html#42\">source</a><a href=\"#impl-StructuralPartialEq-for-Blind%3CF%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;F: <a class=\"trait\" href=\"darkfi_sdk/crypto/pasta_prelude/trait.Field.html\" title=\"trait darkfi_sdk::crypto::pasta_prelude::Field\">Field</a> + <a class=\"trait\" href=\"darkfi_sdk/crypto/blind/trait.EncDecode.html\" title=\"trait darkfi_sdk::crypto::blind::EncDecode\">EncDecode</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"darkfi_sdk/crypto/blind/struct.Blind.html\" title=\"struct darkfi_sdk::crypto::blind::Blind\">Blind</a>&lt;F&gt;</h3></section>","StructuralPartialEq","darkfi_sdk::crypto::blind::BaseBlind","darkfi_sdk::crypto::blind::ScalarBlind"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()