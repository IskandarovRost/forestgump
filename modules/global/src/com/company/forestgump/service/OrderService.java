package com.company.forestgump.service;

import com.company.forestgump.entity.Order;
import com.company.forestgump.entity.OrderItem;

import java.util.List;

public interface OrderService {
    String NAME = "forestgump_OrderService";

    Order placeOrder(List<OrderItem> items);

    List<Order> getUserOrders();

    void cancelOrder(Order order);
}