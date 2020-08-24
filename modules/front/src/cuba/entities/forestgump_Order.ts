import { StandardEntity } from "./base/sys$StandardEntity";
import { User } from "./base/sec$User";
import { Status } from "../enums/enums";
import { OrderItem } from "./forestgump_OrderItem";
export class Order extends StandardEntity {
  static NAME = "forestgump_Order";
  user?: User | null;
  status?: Status | null;
  orderItems?: OrderItem[] | null;
}
export type OrderViewName = "_base" | "_local" | "_minimal" | "order-view";
export type OrderView<V extends OrderViewName> = V extends "_base"
  ? Pick<Order, "id" | "status">
  : V extends "_local"
  ? Pick<Order, "id" | "status">
  : V extends "order-view"
  ? Pick<Order, "id" | "status" | "orderItems" | "user">
  : never;
