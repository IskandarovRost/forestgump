import { StandardEntity } from "./base/sys$StandardEntity";
export class MenuItem extends StandardEntity {
  static NAME = "forestgump_MenuItem";
  name?: string | null;
  price?: any | null;
  description?: string | null;
}
export type MenuItemViewName = "_base" | "_local" | "_minimal";
export type MenuItemView<V extends MenuItemViewName> = V extends "_base"
  ? Pick<MenuItem, "id" | "name" | "price" | "description">
  : V extends "_local"
  ? Pick<MenuItem, "id" | "name" | "price" | "description">
  : V extends "_minimal"
  ? Pick<MenuItem, "id" | "name">
  : never;
