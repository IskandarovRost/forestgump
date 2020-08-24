package com.company.forestgump.entity;

import com.haulmont.cuba.core.entity.StandardEntity;

import javax.persistence.*;

@Table(name = "FORESTGUMP_ORDER_ITEM")
@Entity(name = "forestgump_OrderItem")
public class OrderItem extends StandardEntity {
    private static final long serialVersionUID = -3937069223479844981L;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ORDER_ID")
    private Order order;

    @Column(name = "QUANTITTY")
    private Integer quantitty;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MENU_ITEM_ID")
    private MenuItem menuItem;

    public MenuItem getMenuItem() {
        return menuItem;
    }

    public void setMenuItem(MenuItem menuItem) {
        this.menuItem = menuItem;
    }

    public Integer getQuantitty() {
        return quantitty;
    }

    public void setQuantitty(Integer quantitty) {
        this.quantitty = quantitty;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }
}