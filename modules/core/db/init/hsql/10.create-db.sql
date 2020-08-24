-- begin FORESTGUMP_ORDER
create table FORESTGUMP_ORDER (
    ID varchar(36) not null,
    VERSION integer not null,
    CREATE_TS timestamp,
    CREATED_BY varchar(50),
    UPDATE_TS timestamp,
    UPDATED_BY varchar(50),
    DELETE_TS timestamp,
    DELETED_BY varchar(50),
    --
    USER_ID varchar(36),
    STATUS integer,
    --
    primary key (ID)
)^
-- end FORESTGUMP_ORDER
-- begin FORESTGUMP_ORDER_ITEM
create table FORESTGUMP_ORDER_ITEM (
    ID varchar(36) not null,
    VERSION integer not null,
    CREATE_TS timestamp,
    CREATED_BY varchar(50),
    UPDATE_TS timestamp,
    UPDATED_BY varchar(50),
    DELETE_TS timestamp,
    DELETED_BY varchar(50),
    --
    ORDER_ID varchar(36),
    QUANTITTY integer,
    MENU_ITEM_ID varchar(36),
    --
    primary key (ID)
)^
-- end FORESTGUMP_ORDER_ITEM
-- begin FORESTGUMP_MENU_ITEM
create table FORESTGUMP_MENU_ITEM (
    ID varchar(36) not null,
    VERSION integer not null,
    CREATE_TS timestamp,
    CREATED_BY varchar(50),
    UPDATE_TS timestamp,
    UPDATED_BY varchar(50),
    DELETE_TS timestamp,
    DELETED_BY varchar(50),
    --
    NAME varchar(255),
    PRICE decimal(19, 2),
    DESCRIPTION longvarchar,
    --
    primary key (ID)
)^
-- end FORESTGUMP_MENU_ITEM
