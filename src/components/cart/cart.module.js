import angular from 'angular';

import CartComponent from './cart.component';
import CartService from './cart.service';

export const CartModule = angular
    .module('app.components.cart', [])
    .component('appCart', CartComponent)
    .service('CartService', CartService)
    .name;