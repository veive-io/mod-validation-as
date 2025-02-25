import { Writer, Reader } from "as-proto";

export namespace modvalidation {
  export class on_install_args {
    static encode(message: on_install_args, writer: Writer): void {
      const unique_name_data = message.data;
      if (unique_name_data !== null) {
        writer.uint32(10);
        writer.bytes(unique_name_data);
      }
    }

    static decode(reader: Reader, length: i32): on_install_args {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new on_install_args();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.data = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    data: Uint8Array | null;

    constructor(data: Uint8Array | null = null) {
      this.data = data;
    }
  }

  export class on_uninstall_args {
    static encode(message: on_uninstall_args, writer: Writer): void {
      const unique_name_data = message.data;
      if (unique_name_data !== null) {
        writer.uint32(10);
        writer.bytes(unique_name_data);
      }
    }

    static decode(reader: Reader, length: i32): on_uninstall_args {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new on_uninstall_args();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.data = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    data: Uint8Array | null;

    constructor(data: Uint8Array | null = null) {
      this.data = data;
    }
  }

  @unmanaged
  export class is_type_args {
    static encode(message: is_type_args, writer: Writer): void {
      if (message.type_id != 0) {
        writer.uint32(8);
        writer.uint32(message.type_id);
      }
    }

    static decode(reader: Reader, length: i32): is_type_args {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new is_type_args();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.type_id = reader.uint32();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    type_id: u32;

    constructor(type_id: u32 = 0) {
      this.type_id = type_id;
    }
  }

  @unmanaged
  export class is_type_result {
    static encode(message: is_type_result, writer: Writer): void {
      if (message.value != false) {
        writer.uint32(8);
        writer.bool(message.value);
      }
    }

    static decode(reader: Reader, length: i32): is_type_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new is_type_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: bool;

    constructor(value: bool = false) {
      this.value = value;
    }
  }

  export class scope {
    static encode(message: scope, writer: Writer): void {
      const unique_name_operation_type = message.operation_type;
      if (unique_name_operation_type !== null) {
        writer.uint32(10);
        writer.string(unique_name_operation_type);
      }

      if (message.entry_point != 0) {
        writer.uint32(16);
        writer.uint32(message.entry_point);
      }

      const unique_name_contract_id = message.contract_id;
      if (unique_name_contract_id !== null) {
        writer.uint32(26);
        writer.bytes(unique_name_contract_id);
      }
    }

    static decode(reader: Reader, length: i32): scope {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new scope();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.operation_type = reader.string();
            break;

          case 2:
            message.entry_point = reader.uint32();
            break;

          case 3:
            message.contract_id = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    operation_type: string | null;
    entry_point: u32;
    contract_id: Uint8Array | null;

    constructor(
      operation_type: string | null = null,
      entry_point: u32 = 0,
      contract_id: Uint8Array | null = null
    ) {
      this.operation_type = operation_type;
      this.entry_point = entry_point;
      this.contract_id = contract_id;
    }
  }

  export class manifest {
    static encode(message: manifest, writer: Writer): void {
      const unique_name_name = message.name;
      if (unique_name_name !== null) {
        writer.uint32(10);
        writer.string(unique_name_name);
      }

      if (message.type_id != 0) {
        writer.uint32(16);
        writer.uint32(message.type_id);
      }

      const unique_name_version = message.version;
      if (unique_name_version !== null) {
        writer.uint32(26);
        writer.string(unique_name_version);
      }

      const unique_name_description = message.description;
      if (unique_name_description !== null) {
        writer.uint32(34);
        writer.string(unique_name_description);
      }

      const unique_name_scopes = message.scopes;
      for (let i = 0; i < unique_name_scopes.length; ++i) {
        writer.uint32(42);
        writer.fork();
        scope.encode(unique_name_scopes[i], writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): manifest {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new manifest();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.name = reader.string();
            break;

          case 2:
            message.type_id = reader.uint32();
            break;

          case 3:
            message.version = reader.string();
            break;

          case 4:
            message.description = reader.string();
            break;

          case 5:
            message.scopes.push(scope.decode(reader, reader.uint32()));
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    name: string | null;
    type_id: u32;
    version: string | null;
    description: string | null;
    scopes: Array<scope>;

    constructor(
      name: string | null = null,
      type_id: u32 = 0,
      version: string | null = null,
      description: string | null = null,
      scopes: Array<scope> = []
    ) {
      this.name = name;
      this.type_id = type_id;
      this.version = version;
      this.description = description;
      this.scopes = scopes;
    }
  }

  export class call_data {
    static encode(message: call_data, writer: Writer): void {
      const unique_name_contract_id = message.contract_id;
      if (unique_name_contract_id !== null) {
        writer.uint32(10);
        writer.bytes(unique_name_contract_id);
      }

      if (message.entry_point != 0) {
        writer.uint32(16);
        writer.uint32(message.entry_point);
      }

      const unique_name_caller = message.caller;
      if (unique_name_caller !== null) {
        writer.uint32(26);
        writer.bytes(unique_name_caller);
      }

      const unique_name_data = message.data;
      if (unique_name_data !== null) {
        writer.uint32(34);
        writer.bytes(unique_name_data);
      }
    }

    static decode(reader: Reader, length: i32): call_data {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new call_data();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.contract_id = reader.bytes();
            break;

          case 2:
            message.entry_point = reader.uint32();
            break;

          case 3:
            message.caller = reader.bytes();
            break;

          case 4:
            message.data = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    contract_id: Uint8Array | null;
    entry_point: u32;
    caller: Uint8Array | null;
    data: Uint8Array | null;

    constructor(
      contract_id: Uint8Array | null = null,
      entry_point: u32 = 0,
      caller: Uint8Array | null = null,
      data: Uint8Array | null = null
    ) {
      this.contract_id = contract_id;
      this.entry_point = entry_point;
      this.caller = caller;
      this.data = data;
    }
  }

  export class authorize_arguments {
    static encode(message: authorize_arguments, writer: Writer): void {
      if (message.type != 0) {
        writer.uint32(8);
        writer.int32(message.type);
      }

      const unique_name_call = message.call;
      if (unique_name_call !== null) {
        writer.uint32(18);
        writer.fork();
        call_data.encode(unique_name_call, writer);
        writer.ldelim();
      }
    }

    static decode(reader: Reader, length: i32): authorize_arguments {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new authorize_arguments();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.type = reader.int32();
            break;

          case 2:
            message.call = call_data.decode(reader, reader.uint32());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    type: authorization_type;
    call: call_data | null;

    constructor(type: authorization_type = 0, call: call_data | null = null) {
      this.type = type;
      this.call = call;
    }
  }

  @unmanaged
  export class authorize_result {
    static encode(message: authorize_result, writer: Writer): void {
      if (message.value != false) {
        writer.uint32(8);
        writer.bool(message.value);
      }
    }

    static decode(reader: Reader, length: i32): authorize_result {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new authorize_result();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: bool;

    constructor(value: bool = false) {
      this.value = value;
    }
  }

  export enum authorization_type {
    contract_call = 0,
    transaction_application = 1,
    contract_upload = 2,
  }
}
