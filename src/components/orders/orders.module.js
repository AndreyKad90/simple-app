import angular from 'angular';

import OrdersComponent from './orders.component';
import OrdersService from './orders.service';
import OrderDetailsComponent from './order-details/order.details.component';

export const OrdersModule = angular
    .module('app.components.orders', [])
    .component('appOrders', OrdersComponent)
    .component('appOrderDetails', OrderDetailsComponent)
    .service('OrdersService', OrdersService)
    .name;