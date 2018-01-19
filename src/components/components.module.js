import angular from 'angular';

import { ProductsComponent } from './products/products.component';
import { HistoryComponent } from './history/history.component';
import { CartComponent } from './cart/cart.component';

export const ComponentsModule = angular
    .module('app.components', [])
    // prefixes can be added dynamically, but for simplicity prepended here
    .component('appProducts', ProductsComponent)
    .component('appCart', CartComponent)
    .component('appHistory', HistoryComponent)
    .name;