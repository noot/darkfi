import zmq
from collections import namedtuple
from . import serial
from . import exc

Property = namedtuple("Property", [
    "name",
    "type",
    "subtype",
    "defaults",
    "ui_name",
    "desc",
    "is_null_allowed",
    "array_len",
    "min_val",
    "max_val",
    "enum_items"
])

class Command:
    HELLO = 0
    ADD_NODE = 1
    REMOVE_NODE = 9
    RENAME_NODE = 23
    SCAN_DANGLING = 24
    LOOKUP_NODE_ID = 12
    ADD_PROPERTY = 11
    LINK_NODE = 2
    UNLINK_NODE = 8
    GET_INFO = 19
    GET_CHILDREN = 4
    GET_PARENTS = 5
    GET_PROPERTIES = 3
    GET_PROPERTY_VALUE = 6
    SET_PROPERTY_VALUE = 7
    GET_SIGNALS = 14
    REGISTER_SLOT = 15
    UNREGISTER_SLOT = 16
    LOOKUP_SLOT_ID = 17
    GET_SLOTS = 18
    GET_METHODS = 20
    GET_METHOD = 21
    CALL_METHOD = 22

class SceneNodeType:
    NULL = 0
    ROOT = 1
    WINDOW = 2
    WINDOW_INPUT = 6
    KEYBOARD = 7
    MOUSE = 8
    RENDER_LAYER = 3
    RENDER_OBJECT = 4
    RENDER_MESH = 5
    RENDER_TEXT = 9
    RENDER_TEXTURE = 13
    FONTS = 10
    FONT = 11
    LINE_POSITION = 12

class PropertyType:
    NULL = 0
    BOOL = 1
    UINT32 = 2
    FLOAT32 = 3
    STR = 4
    ENUM = 5
    BUFFER = 6
    SCENE_NODE_ID = 7

    @staticmethod
    def to_str(prop_type):
        match prop_type:
            case PropertyType.NULL:
                return "null"
            case PropertyType.BOOL:
                return "bool"
            case PropertyType.UINT32:
                return "uint32"
            case PropertyType.FLOAT32:
                return "float32"
            case PropertyType.STR:
                return "str"
            case PropertyType.ENUM:
                return "enum"
            case PropertyType.BUFFER:
                return "buffer"
            case PropertyType.SCENE_NODE_ID:
                return "scene_node_id"

class PropertySubType:
    NULL = 0
    COLOR = 1
    PIXEL = 2
    RESOURCE_ID = 3

    @staticmethod
    def to_str(prop_type):
        match prop_type:
            case PropertySubType.NULL:
                return "null"
            case PropertySubType.Color:
                return "color"
            case PropertySubType.PIXEL:
                return "pixel"
            case PropertySubType.RESOURCE_ID:
                return "resource_id"

class PropertyStatus:
    OK = 0
    UNSET = 1
    NULL = 2

class ErrorCode:
    INVALID_SCENE_PATH = 1
    NODE_NOT_FOUND = 2
    CHILD_NODE_NOT_FOUND = 3
    PARENT_NODE_NOT_FOUND = 4
    PROPERTY_ALREADY_EXISTS = 5
    PROPERTY_NOT_FOUND = 6
    PROPERTY_WRONG_TYPE = 7
    PROPERTY_WRONG_LEN = 8
    PROPERTY_WRONG_INDEX = 9
    PROPERTY_OUT_OF_RANGE = 10
    PROPERTY_NULL_NOT_ALLOWED = 11
    PROPERTY_IS_BOUNDED = 12
    PROPERTY_WRONG_ENUM_ITEM = 13
    SIGNAL_ALREADY_EXISTS = 14
    SIGNAL_NOT_FOUND = 15
    SLOT_NOT_FOUND = 16
    METHOD_ALREADY_EXISTS = 17
    METHOD_NOT_FOUND = 18
    NODES_ARE_LINKED = 19
    NODES_NOT_LINKED = 20
    NODE_HAS_PARENTS = 21
    NODE_HAS_CHILDREN = 22
    NODE_PARENT_NAME_CONFLICT = 23
    NODE_CHILD_NAME_CONFLICT = 24
    NODE_SIBLING_NAME_CONFLICT = 25
    FILE_NOT_FOUND = 26

    @staticmethod
    def to_str(errc):
        match errc:
            case ErrorCode.INVALID_SCENE_PATH:
                return "invalid_scene_path"
            case ErrorCode.NODE_NOT_FOUND:
                return "node_not_found"
            case ErrorCode.CHILD_NODE_NOT_FOUND:
                return "child_node_not_found"
            case ErrorCode.PARENT_NODE_NOT_FOUND:
                return "parent_node_not_found"
            case ErrorCode.PROPERTY_ALREADY_EXISTS:
                return "property_already_exists"
            case ErrorCode.PROPERTY_NOT_FOUND:
                return "property_not_found"
            case ErrorCode.PROPERTY_WRONG_TYPE:
                return "property_wrong_type"
            case ErrorCode.PROPERTY_WRONG_LEN:
                return "property_wrong_len"
            case ErrorCode.PROPERTY_WRONG_INDEX:
                return "property_wrong_index"
            case ErrorCode.PROPERTY_OUT_OF_RANGE:
                return "property_out_of_range"
            case ErrorCode.PROPERTY_NULL_NOT_ALLOWED:
                return "property_null_not_allowed"
            case ErrorCode.PROPERTY_IS_BOUNDED:
                return "property_is_bounded"
            case ErrorCode.PROPERTY_WRONG_ENUM_ITEM:
                return "property_wrong_enum_item"
            case ErrorCode.SIGNAL_ALREADY_EXISTS:
                return "signal_already_exists"
            case ErrorCode.SIGNAL_NOT_FOUND:
                return "signal_not_found"
            case ErrorCode.SLOT_NOT_FOUND:
                return "slot_not_found"
            case ErrorCode.METHOD_ALREADY_EXISTS:
                return "method_already_exists"
            case ErrorCode.METHOD_NOT_FOUND:
                return "method_not_found"
            case ErrorCode.NODES_ARE_LINKED:
                return "nodes_are_linked"
            case ErrorCode.NODES_NOT_LINKED:
                return "nodes_not_linked"
            case ErrorCode.NODE_HAS_PARENTS:
                return "node_has_parents"
            case ErrorCode.NODE_HAS_CHILDREN:
                return "node_has_children"
            case ErrorCode.NODE_PARENT_NAME_CONFLICT:
                return "node_parent_name_conflict"
            case ErrorCode.NODE_CHILD_NAME_CONFLICT:
                return "node_child_name_conflict"
            case ErrorCode.NODE_SIBLING_NAME_CONFLICT:
                return "node_sibling_name_conflict"
            case ErrorCode.FILE_NOT_FOUND:
                return "file_not_found"

def vertex(x, y, r, g, b, a, u, v):
    buf = bytearray()
    serial.write_f32(buf, x)
    serial.write_f32(buf, y)
    serial.write_f32(buf, r)
    serial.write_f32(buf, g)
    serial.write_f32(buf, b)
    serial.write_f32(buf, a)
    serial.write_f32(buf, u)
    serial.write_f32(buf, v)
    return buf

def face(idx1, idx2, idx3):
    buf = bytearray()
    serial.write_u32(buf, idx1)
    serial.write_u32(buf, idx2)
    serial.write_u32(buf, idx3)
    return buf

class Api:

    def __init__(self, addr="[::1]", port=9484):
        context = zmq.Context()
        self.socket = context.socket(zmq.REQ)
        self.socket.setsockopt(zmq.IPV6, True)
        self.socket.connect(f"tcp://{addr}:{port}")

    def _make_request(self, cmd, payload):
        req_cmd = bytearray()
        serial.write_u8(req_cmd, cmd)
        self.socket.send_multipart([req_cmd, payload])

        errc, reply = self.socket.recv_multipart()
        errc = int.from_bytes(errc, "little")
        cursor = serial.Cursor(reply)
        match errc:
            case 1:
                raise exc.InvalidScenePath
            case 2:
                raise exc.NodeNotFound
            case 3:
                raise exc.ChildNodeNotFound
            case 4:
                raise exc.ParentNodeNotFound
            case 5:
                raise exc.PropertyAlreadyExists
            case 6:
                raise exc.PropertyNotFound
            case 7:
                raise exc.PropertyWrongType
            case 8:
                raise exc.PropertyWrongLen
            case 9:
                raise exc.PropertyWrongIndex
            case 10:
                raise exc.PropertyOutOfRange
            case 11:
                raise exc.PropertyNullNotAllowed
            case 12:
                raise exc.PropertyIsBounded
            case 13:
                raise exc.PropertyWrongEnumItem
            case 14:
                raise exc.SignalAlreadyExists
            case 15:
                raise exc.SignalNotFound
            case 16:
                raise exc.SlotNotFound
            case 17:
                raise exc.MethodAlreadyExists
            case 18:
                raise exc.MethodNotFound
            case 19:
                raise exc.NodesAreLinked
            case 20:
                raise exc.NodesNotLinked
            case 21:
                raise exc.NodeHasParents
            case 22:
                raise exc.NodeHasChildren
            case 23:
                raise exc.NodeParentNameConflict
            case 24:
                raise exc.NodeChildNameConflict
            case 25:
                raise exc.NodeSiblingNameConflict
            case 26:
                raise exc.FileNotFound
        return cursor

    def hello(self):
        response = self._make_request(Command.HELLO, bytearray())
        return serial.decode_str(response)

    def get_info(self, node_id):
        req = bytearray()
        serial.write_u32(req, node_id)
        cur = self._make_request(Command.GET_INFO, req)
        name = serial.decode_str(cur)
        type = serial.read_u8(cur)
        return (name, type)

    def get_children(self, node_id):
        req = bytearray()
        serial.write_u32(req, node_id)
        cur = self._make_request(Command.GET_CHILDREN, req)
        children_len = serial.decode_varint(cur)
        children = []
        for _ in range(children_len):
            child_name = serial.decode_str(cur)
            child_id = serial.read_u32(cur)
            child_type = serial.read_u8(cur)
            children.append((child_name, child_id, child_type))
        return children

    def get_parents(self, node_id):
        req = bytearray()
        serial.write_u32(req, node_id)
        cur = self._make_request(Command.GET_PARENTS, req)
        parents_len = serial.decode_varint(cur)
        parents = []
        for _ in range(parents_len):
            parent_name = serial.decode_str(cur)
            parent_id = serial.read_u32(cur)
            parent_type = serial.read_u8(cur)
            parents.append((parent_name, parent_id, parent_type))
        return parents

    def get_properties(self, node_id):
        req = bytearray()
        serial.write_u32(req, node_id)
        cur = self._make_request(Command.GET_PROPERTIES, req)
        props_len = serial.decode_varint(cur)
        props = []

        prop_read_fn = lambda cur: Api.read_prop_val(cur, prop_type)
        enum_read_fn = lambda cur: serial.decode_arr(cur, serial.decode_str)

        for _ in range(props_len):
            prop_name = serial.decode_str(cur)
            # We need prop_type below
            prop_type = serial.read_u8(cur)
            prop = Property(
                prop_name,
                prop_type,
                # subtype 
                serial.read_u8(cur),
                # defaults 
                serial.decode_arr(cur, prop_read_fn),
                # ui_name 
                serial.decode_str(cur),
                # desc 
                serial.decode_str(cur),
                # is_null_allowed 
                bool(serial.read_u8(cur)),
                # array_len 
                serial.read_u32(cur),
                # min_val 
                serial.decode_opt(cur, prop_read_fn),
                # max_val 
                serial.decode_opt(cur, prop_read_fn),
                # enum_items 
                serial.decode_opt(cur, enum_read_fn)
            )
            props.append(prop)
        return props

    @staticmethod
    def read_prop_val(cur, prop_type):
        match prop_type:
            case PropertyType.NULL:
                return None
            case PropertyType.BOOL:
                return bool(serial.read_u8(cur))
            case PropertyType.UINT32:
                return serial.read_u32(cur)
            case PropertyType.FLOAT32:
                return serial.read_f32(cur)
            case PropertyType.STR:
                return serial.decode_str(cur)
            case PropertyType.ENUM:
                return serial.decode_str(cur)
            case PropertyType.BUFFER:
                pass
            case PropertyType.SCENE_NODE_ID:
                return serial.read_u32(cur)
            case _:
                raise Exception("unknown property type returned")

    def get_property_value(self, node_id, prop_name):
        req = bytearray()
        serial.write_u32(req, node_id)
        serial.encode_str(req, prop_name)
        cur = self._make_request(Command.GET_PROPERTY_VALUE, req)
        prop_type = serial.read_u8(cur)

        def prop_read_fn(cur):
            prop_status = serial.read_u8(cur)
            match prop_status:
                case PropertyStatus.NULL:
                    return None
                case PropertyStatus.UNSET | PropertyStatus.OK:
                    return Api.read_prop_val(cur, prop_type)

        vals = serial.decode_arr(cur, prop_read_fn)
        return vals

    def add_node(self, node_name, node_type):
        req = bytearray()
        serial.encode_str(req, node_name)
        serial.write_u8(req, int(node_type))
        cur = self._make_request(Command.ADD_NODE, req)
        node_id = serial.read_u32(cur)
        return node_id

    def remove_node(self, node_id):
        req = bytearray()
        serial.write_u32(req, node_id)
        self._make_request(Command.REMOVE_NODE, req)

    def rename_node(self, node_id, node_name):
        req = bytearray()
        serial.write_u32(req, node_id)
        serial.encode_str(req, node_name)
        self._make_request(Command.RENAME_NODE, req)

    def scan_dangling(self):
        cur = self._make_request(Command.SCAN_DANGLING, bytearray())
        dangling_len = serial.decode_varint(cur)
        dangling = []
        for _ in range(dangling_len):
            node_id = serial.read_u32(cur)
            dangling.append(node_id)
        return dangling

    def lookup_node_id(self, node_path):
        req = bytearray()
        serial.encode_str(req, node_path)
        try:
            cur = self._make_request(Command.LOOKUP_NODE_ID, req)
        except exc.RequestNodeNotFound:
            return None
        return serial.read_u32(cur)

    def add_property(self, node_id, prop):
        req = bytearray()
        serial.write_u32(req, node_id)
        serial.encode_str(req, prop.name)
        serial.write_u8(req, int(prop.type))
        serial.write_u8(req, int(prop.subtype))
        serial.write_u32(req, int(prop.array_len))
        if prop.defaults is None:
            serial.write_u8(req, 0)
        else:
            serial.write_u8(req, 1)
            defaults_len = len(prop.defaults)
            serial.encode_varint(req, defaults_len)
            for default in prop.defaults:
                match prop.type:
                    case PropertyType.UINT32:
                        serial.write_u32(req, default)
                    case PropertyType.FLOAT32:
                        serial.write_f32(req, default)
                    case _:
                        raise exc.PropertyWrongType
        serial.encode_str(req, prop.ui_name)
        serial.encode_str(req, prop.desc)
        serial.write_u8(req, int(prop.is_null_allowed))
        if prop.min_val is None:
            serial.write_u8(req, 0)
        else:
            serial.write_u8(req, 1)
            match prop.type:
                case PropertyType.UINT32:
                    serial.write_u32(req, prop.min_val)
                case PropertyType.FLOAT32:
                    serial.write_f32(req, prop.min_val)
                case _:
                    raise exc.PropertyWrongType
        if prop.max_val is None:
            serial.write_u8(req, 0)
        else:
            serial.write_u8(req, 1)
            match prop.type:
                case PropertyType.UINT32:
                    serial.write_u32(req, prop.max_val)
                case PropertyType.FLOAT32:
                    serial.write_f32(req, prop.max_val)
                case _:
                    raise exc.PropertyWrongType
        serial.encode_varint(req, len(prop.enum_items))
        for enum_item in prop.enum_items:
            if prop.type != PropertyType.ENUM:
                raise exc.PropertyWrongType
            serial.encode_str(req, enum_item)
        self._make_request(Command.ADD_PROPERTY, req)

    def link_node(self, child_id, parent_id):
        req = bytearray()
        serial.write_u32(req, child_id)
        serial.write_u32(req, parent_id)
        self._make_request(Command.LINK_NODE, req)

    def unlink_node(self, child_id, parent_id):
        req = bytearray()
        serial.write_u32(req, child_id)
        serial.write_u32(req, parent_id)
        self._make_request(Command.UNLINK_NODE, req)

    def set_property_bool(self, node_id, prop_name, val):
        req = bytearray()
        serial.write_u32(req, node_id)
        serial.encode_str(req, prop_name)
        serial.write_u8(req, int(val))
        self._make_request(Command.SET_PROPERTY_VALUE, req)

    def set_property_u32(self, node_id, prop_name, i, val):
        req = bytearray()
        serial.write_u32(req, node_id)
        serial.encode_str(req, prop_name)
        serial.write_u32(req, i)
        serial.write_u32(req, val)
        self._make_request(Command.SET_PROPERTY_VALUE, req)

    def set_property_f32(self, node_id, prop_name, i, val):
        req = bytearray()
        serial.write_u32(req, node_id)
        serial.encode_str(req, prop_name)
        serial.write_u32(req, i)
        serial.write_f32(req, val)
        self._make_request(Command.SET_PROPERTY_VALUE, req)

    def set_property_buffer(self, node_id, prop_name, i, buf):
        req = bytearray()
        serial.write_u32(req, node_id)
        serial.encode_str(req, prop_name)
        serial.write_u32(req, i)
        serial.encode_buf(req, buf)
        self._make_request(Command.SET_PROPERTY_VALUE, req)

    def set_property_str(self, node_id, prop_name, i, val):
        req = bytearray()
        serial.write_u32(req, node_id)
        serial.encode_str(req, prop_name)
        serial.write_u32(req, i)
        serial.encode_str(req, val)
        self._make_request(Command.SET_PROPERTY_VALUE, req)

    def get_signals(self, node_id):
        req = bytearray()
        serial.write_u32(req, node_id)
        cur = self._make_request(Command.GET_SIGNALS, req)
        sigs_len = serial.decode_varint(cur)
        sigs = []
        for _ in range(sigs_len):
            sigs.append(serial.decode_str(cur))
        return sigs

    def register_slot(self, node_id, sig_name, slot_name, user_data):
        req = bytearray()
        serial.write_u32(req, node_id)
        serial.encode_str(req, sig_name)
        serial.encode_str(req, slot_name)
        serial.encode_varint(req, len(user_data))
        req += user_data
        cur = self._make_request(Command.REGISTER_SLOT, req)
        slot_id = serial.read_u32(cur)
        return slot_id

    def unregister_slot(self, node_id, sig_name, slot_id):
        req = bytearray()
        serial.write_u32(req, node_id)
        serial.encode_str(req, sig_name)
        serial.write_u32(req, slot_id)
        self._make_request(Command.UNREGISTER_SLOT, req)

    def lookup_slot_id(self, node_id, sig_name, slot_name):
        req = bytearray()
        serial.write_u32(req, node_id)
        serial.encode_str(req, sig_name)
        serial.encode_str(req, slot_name)
        try:
            cur = self._make_request(Command.LOOKUP_SLOT_ID, req)
        except exc.RequestSlotNotFound:
            return None
        return serial.read_u32(cur)

    def get_slots(self, node_id, sig_name):
        req = bytearray()
        serial.write_u32(req, node_id)
        serial.encode_str(req, sig_name)
        cur = self._make_request(Command.GET_SLOTS, req)
        slots_len = serial.decode_varint(cur)
        slots = []
        for _ in range(slots_len):
            slot_name = serial.decode_str(cur)
            slot_id = serial.read_u32(cur)
            slots.append((slot_id, slot_name))
        return slots

    def get_methods(self, node_id):
        req = bytearray()
        serial.write_u32(req, node_id)
        cur = self._make_request(Command.GET_METHODS, req)
        methods_len = serial.decode_varint(cur)
        methods = []
        for _ in range(methods_len):
            method_name = serial.decode_str(cur)
            methods.append(method_name)
        return methods

    def get_method(self, node_id, method_name):
        req = bytearray()
        serial.write_u32(req, node_id)
        serial.encode_str(req, method_name)
        cur = self._make_request(Command.GET_METHOD, req)
        args_len = serial.decode_varint(cur)
        args = []
        for _ in range(args_len):
            arg_name = serial.decode_str(cur)
            arg_type = serial.read_u8(cur)
            args.append((arg_name, arg_type))
        results_len = serial.decode_varint(cur)
        results = []
        for _ in range(results_len):
            result_name = serial.decode_str(cur)
            result_type = serial.read_u8(cur)
            results.append((result_name, result_type))
        return (args, results)

    def call_method(self, node_id, method_name, arg_data):
        req = bytearray()
        serial.write_u32(req, node_id)
        serial.encode_str(req, method_name)
        serial.encode_buf(req, arg_data)
        cur = self._make_request(Command.CALL_METHOD, req)
        errc = serial.read_u8(cur)
        result = serial.decode_buf(cur)
        return (errc, result)

