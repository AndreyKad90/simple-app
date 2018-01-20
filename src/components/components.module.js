import angular from 'angular';

import { HistoryComponent } from './history/history.component';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';

export const ComponentsModule = angular
    .module('app.components', [
        ProductsModule,
        CartModule
    ])
    .component('appHistory', HistoryComponent)
    .name;