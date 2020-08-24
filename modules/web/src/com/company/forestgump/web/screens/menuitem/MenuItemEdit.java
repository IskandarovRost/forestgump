package com.company.forestgump.web.screens.menuitem;

import com.haulmont.cuba.gui.screen.*;
import com.company.forestgump.entity.MenuItem;

@UiController("forestgump_MenuItem.edit")
@UiDescriptor("menu-item-edit.xml")
@EditedEntityContainer("menuItemDc")
@LoadDataBeforeShow
public class MenuItemEdit extends StandardEditor<MenuItem> {
}