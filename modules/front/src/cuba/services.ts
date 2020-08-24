import { CubaApp, FetchOptions } from "@cuba-platform/rest";

export type forestgump_OrderService_cancelOrder_params = {
  order: any;
};

export type forestgump_OrderService_placeOrder_params = {
  items: any;
};

export var restServices = {
  forestgump_OrderService: {
    cancelOrder: (cubaApp: CubaApp, fetchOpts?: FetchOptions) => (
      params: forestgump_OrderService_cancelOrder_params
    ) => {
      return cubaApp.invokeService(
        "forestgump_OrderService",
        "cancelOrder",
        params,
        fetchOpts
      );
    },
    getUserOrders: (cubaApp: CubaApp, fetchOpts?: FetchOptions) => () => {
      return cubaApp.invokeService(
        "forestgump_OrderService",
        "getUserOrders",
        {},
        fetchOpts
      );
    },
    placeOrder: (cubaApp: CubaApp, fetchOpts?: FetchOptions) => (
      params: forestgump_OrderService_placeOrder_params
    ) => {
      return cubaApp.invokeService(
        "forestgump_OrderService",
        "placeOrder",
        params,
        fetchOpts
      );
    }
  }
};
