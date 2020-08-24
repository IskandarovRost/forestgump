package com.company.forestgump.web.screens.menuitem;

import com.haulmont.cuba.gui.screen.*;
import com.company.forestgump.entity.MenuItem;

@UiController("forestgump_MenuItem.browse")
@UiDescriptor("menu-item-browse.xml")
@LookupComponent("menuItemsTable")
@LoadDataBeforeShow
public class MenuItemBrowse extends StandardLookup<MenuItem> {
}