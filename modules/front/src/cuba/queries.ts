import {
  CubaApp,
  FetchOptions,
  SerializedEntity,
  EntitiesWithCount
} from "@cuba-platform/rest";

import { MenuItem } from "./entities/forestgump_MenuItem";

import { Order } from "./entities/forestgump_Order";

export type queries_Order_orderBystatus_params = {
  status: number;
};

export var restQueries = {
  MenuItem: {
    menuItems: (cubaApp: CubaApp, fetchOpts?: FetchOptions) => (): Promise<
      SerializedEntity<MenuItem>[]
    > => {
      return cubaApp.query<MenuItem>(
        "forestgump_MenuItem",
        "menuItems",
        {},
        fetchOpts
      );
    },
    menuItemsCount: (cubaApp: CubaApp, fetchOpts?: FetchOptions) => (): Promise<
      Number
    > => {
      return cubaApp.queryCount(
        "forestgump_MenuItem",
        "menuItems",
        {},
        fetchOpts
      );
    },
    menuItemsWithCount: (
      cubaApp: CubaApp,
      fetchOpts?: FetchOptions
    ) => (): Promise<EntitiesWithCount<MenuItem>> => {
      return cubaApp.queryWithCount<MenuItem>(
        "forestgump_MenuItem",
        "menuItems",
        {},
        fetchOpts
      );
    }
  },
  Order: {
    orderBystatus: (cubaApp: CubaApp, fetchOpts?: FetchOptions) => (
      params: queries_Order_orderBystatus_params
    ): Promise<SerializedEntity<Order>[]> => {
      return cubaApp.query<Order>(
        "forestgump_Order",
        "orderBystatus",
        params,
        fetchOpts
      );
    },
    orderBystatusCount: (cubaApp: CubaApp, fetchOpts?: FetchOptions) => (
      params: queries_Order_orderBystatus_params
    ): Promise<Number> => {
      return cubaApp.queryCount(
        "forestgump_Order",
        "orderBystatus",
        params,
        fetchOpts
      );
    },
    orderBystatusWithCount: (cubaApp: CubaApp, fetchOpts?: FetchOptions) => (
      params: queries_Order_orderBystatus_params
    ): Promise<EntitiesWithCount<Order>> => {
      return cubaApp.queryWithCount<Order>(
        "forestgump_Order",
        "orderBystatus",
        params,
        fetchOpts
      );
    }
  }
};
