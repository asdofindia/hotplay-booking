// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.2.0
//   protoc               v5.27.3
// source: booking/booking.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import {
  type CallOptions,
  ChannelCredentials,
  Client,
  type ClientOptions,
  type ClientUnaryCall,
  type handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  type ServiceError,
  type UntypedServiceImplementation,
} from "@grpc/grpc-js";
import { Timestamp } from "../google/protobuf/timestamp";

export const protobufPackage = "";

export interface Analytics {
  /** Arbitrary key-value pairs for marketing integrations */
  properties: { [key: string]: string };
}

export interface Analytics_PropertiesEntry {
  key: string;
  value: string;
}

export interface TrackingResult {
}

export interface OrderNeeded {
  sessionId: string;
  emailId: string;
  eventId: string;
  numberOfTickets: number;
}

export interface OrderCreated {
  orderId: string;
}

export interface PaymentNeeded {
  orderId: string;
  amount: number;
}

export interface Receipt {
  receiptId: string;
  orderId: string;
  paymentTime: Date | undefined;
  totalAmount: number;
}

export interface TicketNeed {
  orderId: string;
}

export interface Ticket {
  orderId: string;
  emailId: string;
  eventId: string;
  seatNumbers: number[];
}

function createBaseAnalytics(): Analytics {
  return { properties: {} };
}

export const Analytics: MessageFns<Analytics> = {
  encode(message: Analytics, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    Object.entries(message.properties).forEach(([key, value]) => {
      Analytics_PropertiesEntry.encode({ key: key as any, value }, writer.uint32(10).fork()).join();
    });
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Analytics {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          const entry1 = Analytics_PropertiesEntry.decode(reader, reader.uint32());
          if (entry1.value !== undefined) {
            message.properties[entry1.key] = entry1.value;
          }
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics {
    return {
      properties: isObject(object.properties)
        ? Object.entries(object.properties).reduce<{ [key: string]: string }>((acc, [key, value]) => {
          acc[key] = String(value);
          return acc;
        }, {})
        : {},
    };
  },

  toJSON(message: Analytics): unknown {
    const obj: any = {};
    if (message.properties) {
      const entries = Object.entries(message.properties);
      if (entries.length > 0) {
        obj.properties = {};
        entries.forEach(([k, v]) => {
          obj.properties[k] = v;
        });
      }
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics>, I>>(base?: I): Analytics {
    return Analytics.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Analytics>, I>>(object: I): Analytics {
    const message = createBaseAnalytics();
    message.properties = Object.entries(object.properties ?? {}).reduce<{ [key: string]: string }>(
      (acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = globalThis.String(value);
        }
        return acc;
      },
      {},
    );
    return message;
  },
};

function createBaseAnalytics_PropertiesEntry(): Analytics_PropertiesEntry {
  return { key: "", value: "" };
}

export const Analytics_PropertiesEntry: MessageFns<Analytics_PropertiesEntry> = {
  encode(message: Analytics_PropertiesEntry, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Analytics_PropertiesEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnalytics_PropertiesEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Analytics_PropertiesEntry {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: Analytics_PropertiesEntry): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Analytics_PropertiesEntry>, I>>(base?: I): Analytics_PropertiesEntry {
    return Analytics_PropertiesEntry.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Analytics_PropertiesEntry>, I>>(object: I): Analytics_PropertiesEntry {
    const message = createBaseAnalytics_PropertiesEntry();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseTrackingResult(): TrackingResult {
  return {};
}

export const TrackingResult: MessageFns<TrackingResult> = {
  encode(_: TrackingResult, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TrackingResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTrackingResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): TrackingResult {
    return {};
  },

  toJSON(_: TrackingResult): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<TrackingResult>, I>>(base?: I): TrackingResult {
    return TrackingResult.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TrackingResult>, I>>(_: I): TrackingResult {
    const message = createBaseTrackingResult();
    return message;
  },
};

function createBaseOrderNeeded(): OrderNeeded {
  return { sessionId: "", emailId: "", eventId: "", numberOfTickets: 0 };
}

export const OrderNeeded: MessageFns<OrderNeeded> = {
  encode(message: OrderNeeded, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.sessionId !== "") {
      writer.uint32(10).string(message.sessionId);
    }
    if (message.emailId !== "") {
      writer.uint32(18).string(message.emailId);
    }
    if (message.eventId !== "") {
      writer.uint32(26).string(message.eventId);
    }
    if (message.numberOfTickets !== 0) {
      writer.uint32(32).int32(message.numberOfTickets);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): OrderNeeded {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderNeeded();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.sessionId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.emailId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.eventId = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.numberOfTickets = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OrderNeeded {
    return {
      sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : "",
      emailId: isSet(object.emailId) ? globalThis.String(object.emailId) : "",
      eventId: isSet(object.eventId) ? globalThis.String(object.eventId) : "",
      numberOfTickets: isSet(object.numberOfTickets) ? globalThis.Number(object.numberOfTickets) : 0,
    };
  },

  toJSON(message: OrderNeeded): unknown {
    const obj: any = {};
    if (message.sessionId !== "") {
      obj.sessionId = message.sessionId;
    }
    if (message.emailId !== "") {
      obj.emailId = message.emailId;
    }
    if (message.eventId !== "") {
      obj.eventId = message.eventId;
    }
    if (message.numberOfTickets !== 0) {
      obj.numberOfTickets = Math.round(message.numberOfTickets);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OrderNeeded>, I>>(base?: I): OrderNeeded {
    return OrderNeeded.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OrderNeeded>, I>>(object: I): OrderNeeded {
    const message = createBaseOrderNeeded();
    message.sessionId = object.sessionId ?? "";
    message.emailId = object.emailId ?? "";
    message.eventId = object.eventId ?? "";
    message.numberOfTickets = object.numberOfTickets ?? 0;
    return message;
  },
};

function createBaseOrderCreated(): OrderCreated {
  return { orderId: "" };
}

export const OrderCreated: MessageFns<OrderCreated> = {
  encode(message: OrderCreated, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.orderId !== "") {
      writer.uint32(10).string(message.orderId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): OrderCreated {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderCreated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.orderId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OrderCreated {
    return { orderId: isSet(object.orderId) ? globalThis.String(object.orderId) : "" };
  },

  toJSON(message: OrderCreated): unknown {
    const obj: any = {};
    if (message.orderId !== "") {
      obj.orderId = message.orderId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OrderCreated>, I>>(base?: I): OrderCreated {
    return OrderCreated.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OrderCreated>, I>>(object: I): OrderCreated {
    const message = createBaseOrderCreated();
    message.orderId = object.orderId ?? "";
    return message;
  },
};

function createBasePaymentNeeded(): PaymentNeeded {
  return { orderId: "", amount: 0 };
}

export const PaymentNeeded: MessageFns<PaymentNeeded> = {
  encode(message: PaymentNeeded, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.orderId !== "") {
      writer.uint32(10).string(message.orderId);
    }
    if (message.amount !== 0) {
      writer.uint32(21).float(message.amount);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): PaymentNeeded {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePaymentNeeded();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.orderId = reader.string();
          continue;
        case 2:
          if (tag !== 21) {
            break;
          }

          message.amount = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): PaymentNeeded {
    return {
      orderId: isSet(object.orderId) ? globalThis.String(object.orderId) : "",
      amount: isSet(object.amount) ? globalThis.Number(object.amount) : 0,
    };
  },

  toJSON(message: PaymentNeeded): unknown {
    const obj: any = {};
    if (message.orderId !== "") {
      obj.orderId = message.orderId;
    }
    if (message.amount !== 0) {
      obj.amount = message.amount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<PaymentNeeded>, I>>(base?: I): PaymentNeeded {
    return PaymentNeeded.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<PaymentNeeded>, I>>(object: I): PaymentNeeded {
    const message = createBasePaymentNeeded();
    message.orderId = object.orderId ?? "";
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseReceipt(): Receipt {
  return { receiptId: "", orderId: "", paymentTime: undefined, totalAmount: 0 };
}

export const Receipt: MessageFns<Receipt> = {
  encode(message: Receipt, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.receiptId !== "") {
      writer.uint32(10).string(message.receiptId);
    }
    if (message.orderId !== "") {
      writer.uint32(18).string(message.orderId);
    }
    if (message.paymentTime !== undefined) {
      Timestamp.encode(toTimestamp(message.paymentTime), writer.uint32(26).fork()).join();
    }
    if (message.totalAmount !== 0) {
      writer.uint32(37).float(message.totalAmount);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Receipt {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseReceipt();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.receiptId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.orderId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.paymentTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 37) {
            break;
          }

          message.totalAmount = reader.float();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Receipt {
    return {
      receiptId: isSet(object.receiptId) ? globalThis.String(object.receiptId) : "",
      orderId: isSet(object.orderId) ? globalThis.String(object.orderId) : "",
      paymentTime: isSet(object.paymentTime) ? fromJsonTimestamp(object.paymentTime) : undefined,
      totalAmount: isSet(object.totalAmount) ? globalThis.Number(object.totalAmount) : 0,
    };
  },

  toJSON(message: Receipt): unknown {
    const obj: any = {};
    if (message.receiptId !== "") {
      obj.receiptId = message.receiptId;
    }
    if (message.orderId !== "") {
      obj.orderId = message.orderId;
    }
    if (message.paymentTime !== undefined) {
      obj.paymentTime = message.paymentTime.toISOString();
    }
    if (message.totalAmount !== 0) {
      obj.totalAmount = message.totalAmount;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Receipt>, I>>(base?: I): Receipt {
    return Receipt.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Receipt>, I>>(object: I): Receipt {
    const message = createBaseReceipt();
    message.receiptId = object.receiptId ?? "";
    message.orderId = object.orderId ?? "";
    message.paymentTime = object.paymentTime ?? undefined;
    message.totalAmount = object.totalAmount ?? 0;
    return message;
  },
};

function createBaseTicketNeed(): TicketNeed {
  return { orderId: "" };
}

export const TicketNeed: MessageFns<TicketNeed> = {
  encode(message: TicketNeed, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.orderId !== "") {
      writer.uint32(10).string(message.orderId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): TicketNeed {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTicketNeed();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.orderId = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): TicketNeed {
    return { orderId: isSet(object.orderId) ? globalThis.String(object.orderId) : "" };
  },

  toJSON(message: TicketNeed): unknown {
    const obj: any = {};
    if (message.orderId !== "") {
      obj.orderId = message.orderId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<TicketNeed>, I>>(base?: I): TicketNeed {
    return TicketNeed.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<TicketNeed>, I>>(object: I): TicketNeed {
    const message = createBaseTicketNeed();
    message.orderId = object.orderId ?? "";
    return message;
  },
};

function createBaseTicket(): Ticket {
  return { orderId: "", emailId: "", eventId: "", seatNumbers: [] };
}

export const Ticket: MessageFns<Ticket> = {
  encode(message: Ticket, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.orderId !== "") {
      writer.uint32(10).string(message.orderId);
    }
    if (message.emailId !== "") {
      writer.uint32(18).string(message.emailId);
    }
    if (message.eventId !== "") {
      writer.uint32(26).string(message.eventId);
    }
    writer.uint32(34).fork();
    for (const v of message.seatNumbers) {
      writer.int32(v);
    }
    writer.join();
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): Ticket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTicket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.orderId = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.emailId = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.eventId = reader.string();
          continue;
        case 4:
          if (tag === 32) {
            message.seatNumbers.push(reader.int32());

            continue;
          }

          if (tag === 34) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.seatNumbers.push(reader.int32());
            }

            continue;
          }

          break;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Ticket {
    return {
      orderId: isSet(object.orderId) ? globalThis.String(object.orderId) : "",
      emailId: isSet(object.emailId) ? globalThis.String(object.emailId) : "",
      eventId: isSet(object.eventId) ? globalThis.String(object.eventId) : "",
      seatNumbers: globalThis.Array.isArray(object?.seatNumbers)
        ? object.seatNumbers.map((e: any) => globalThis.Number(e))
        : [],
    };
  },

  toJSON(message: Ticket): unknown {
    const obj: any = {};
    if (message.orderId !== "") {
      obj.orderId = message.orderId;
    }
    if (message.emailId !== "") {
      obj.emailId = message.emailId;
    }
    if (message.eventId !== "") {
      obj.eventId = message.eventId;
    }
    if (message.seatNumbers?.length) {
      obj.seatNumbers = message.seatNumbers.map((e) => Math.round(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Ticket>, I>>(base?: I): Ticket {
    return Ticket.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Ticket>, I>>(object: I): Ticket {
    const message = createBaseTicket();
    message.orderId = object.orderId ?? "";
    message.emailId = object.emailId ?? "";
    message.eventId = object.eventId ?? "";
    message.seatNumbers = object.seatNumbers?.map((e) => e) || [];
    return message;
  },
};

export type BookingService = typeof BookingService;
export const BookingService = {
  track: {
    path: "/Booking/Track",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: Analytics) => Buffer.from(Analytics.encode(value).finish()),
    requestDeserialize: (value: Buffer) => Analytics.decode(value),
    responseSerialize: (value: TrackingResult) => Buffer.from(TrackingResult.encode(value).finish()),
    responseDeserialize: (value: Buffer) => TrackingResult.decode(value),
  },
  reserve: {
    path: "/Booking/Reserve",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: OrderNeeded) => Buffer.from(OrderNeeded.encode(value).finish()),
    requestDeserialize: (value: Buffer) => OrderNeeded.decode(value),
    responseSerialize: (value: OrderCreated) => Buffer.from(OrderCreated.encode(value).finish()),
    responseDeserialize: (value: Buffer) => OrderCreated.decode(value),
  },
  pay: {
    path: "/Booking/Pay",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: PaymentNeeded) => Buffer.from(PaymentNeeded.encode(value).finish()),
    requestDeserialize: (value: Buffer) => PaymentNeeded.decode(value),
    responseSerialize: (value: Receipt) => Buffer.from(Receipt.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Receipt.decode(value),
  },
  getTicket: {
    path: "/Booking/GetTicket",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: TicketNeed) => Buffer.from(TicketNeed.encode(value).finish()),
    requestDeserialize: (value: Buffer) => TicketNeed.decode(value),
    responseSerialize: (value: Ticket) => Buffer.from(Ticket.encode(value).finish()),
    responseDeserialize: (value: Buffer) => Ticket.decode(value),
  },
} as const;

export interface BookingServer extends UntypedServiceImplementation {
  track: handleUnaryCall<Analytics, TrackingResult>;
  reserve: handleUnaryCall<OrderNeeded, OrderCreated>;
  pay: handleUnaryCall<PaymentNeeded, Receipt>;
  getTicket: handleUnaryCall<TicketNeed, Ticket>;
}

export interface BookingClient extends Client {
  track(request: Analytics, callback: (error: ServiceError | null, response: TrackingResult) => void): ClientUnaryCall;
  track(
    request: Analytics,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: TrackingResult) => void,
  ): ClientUnaryCall;
  track(
    request: Analytics,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: TrackingResult) => void,
  ): ClientUnaryCall;
  reserve(
    request: OrderNeeded,
    callback: (error: ServiceError | null, response: OrderCreated) => void,
  ): ClientUnaryCall;
  reserve(
    request: OrderNeeded,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: OrderCreated) => void,
  ): ClientUnaryCall;
  reserve(
    request: OrderNeeded,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: OrderCreated) => void,
  ): ClientUnaryCall;
  pay(request: PaymentNeeded, callback: (error: ServiceError | null, response: Receipt) => void): ClientUnaryCall;
  pay(
    request: PaymentNeeded,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Receipt) => void,
  ): ClientUnaryCall;
  pay(
    request: PaymentNeeded,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Receipt) => void,
  ): ClientUnaryCall;
  getTicket(request: TicketNeed, callback: (error: ServiceError | null, response: Ticket) => void): ClientUnaryCall;
  getTicket(
    request: TicketNeed,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: Ticket) => void,
  ): ClientUnaryCall;
  getTicket(
    request: TicketNeed,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: Ticket) => void,
  ): ClientUnaryCall;
}

export const BookingClient = makeGenericClientConstructor(BookingService, "Booking") as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): BookingClient;
  service: typeof BookingService;
  serviceName: string;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
