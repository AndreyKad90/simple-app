import angular from 'angular';

import ProductsComponent from './products.component';
import ProductsService from './products.service';

export const ProductsModule = angular
    .module('app.components.products', [])
    .component('appProducts', ProductsComponent)
    .service('ProductsService', ProductsService)
    .name;