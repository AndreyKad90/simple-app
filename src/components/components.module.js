import angular from 'angular';

import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { OrdersModule } from './orders/orders.module';

export const ComponentsModule = angular
    .module('app.components', [
        ProductsModule,
        CartModule,
        OrdersModule
    ])
    .name;