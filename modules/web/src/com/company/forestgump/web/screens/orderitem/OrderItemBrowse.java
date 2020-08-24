package com.company.forestgump.web.screens.orderitem;

import com.haulmont.cuba.gui.screen.*;
import com.company.forestgump.entity.OrderItem;

@UiController("forestgump_OrderItem.browse")
@UiDescriptor("order-item-browse.xml")
@LookupComponent("orderItemsTable")
@LoadDataBeforeShow
public class OrderItemBrowse extends StandardLookup<OrderItem> {
}