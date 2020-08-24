package com.company.forestgump.web.screens.order;

import com.haulmont.cuba.gui.screen.*;
import com.company.forestgump.entity.Order;

@UiController("forestgump_Order.edit")
@UiDescriptor("order-edit.xml")
@EditedEntityContainer("orderDc")
@LoadDataBeforeShow
public class OrderEdit extends StandardEditor<Order> {
}