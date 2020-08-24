package com.company.forestgump.web.screens.order;

import com.haulmont.cuba.gui.screen.*;
import com.company.forestgump.entity.Order;

@UiController("forestgump_Order.browse")
@UiDescriptor("order-browse.xml")
@LookupComponent("ordersTable")
@LoadDataBeforeShow
public class OrderBrowse extends StandardLookup<Order> {
}