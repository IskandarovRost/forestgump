import { StandardEntity } from "./base/sys$StandardEntity";
import { Order } from "./forestgump_Order";
import { MenuItem } from "./forestgump_MenuItem";
export class OrderItem extends StandardEntity {
  static NAME = "forestgump_OrderItem";
  order?: Order | null;
  quantitty?: number | null;
  menuItem?: MenuItem | null;
}
export type OrderItemViewName =
  | "_base"
  | "_local"
  | "_minimal"
  | "orderItem-view";
export type OrderItemView<V extends OrderItemViewName> = V extends "_base"
  ? Pick<OrderItem, "id" | "quantitty">
  : V extends "_local"
  ? Pick<OrderItem, "id" | "quantitty">
  : V extends "orderItem-view"
  ? Pick<OrderItem, "id" | "quantitty" | "order" | "menuItem">
  : never;
