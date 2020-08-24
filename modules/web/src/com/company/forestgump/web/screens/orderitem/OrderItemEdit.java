package com.company.forestgump.web.screens.orderitem;

import com.haulmont.cuba.gui.screen.*;
import com.company.forestgump.entity.OrderItem;

@UiController("forestgump_OrderItem.edit")
@UiDescriptor("order-item-edit.xml")
@EditedEntityContainer("orderItemDc")
@LoadDataBeforeShow
public class OrderItemEdit extends StandardEditor<OrderItem> {
}