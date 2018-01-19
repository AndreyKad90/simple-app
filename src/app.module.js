import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import { CommonModule } from './common/common.module';
import { ComponentsModule } from './components/components.module';

angular
    .module('app', [
        CommonModule,
        ComponentsModule,
        uiRouter
    ]).config(($stateProvider) => {
        // TODO: replace the routes from here
        $stateProvider
            .state('main', {
                url: '/',
                template: '<app-base></app-base>'
            })
            .state('main.products', {
                url: 'products',
                template: '<app-products></app-products>'
            })
            .state('main.cart', {
                url: 'cart',
                template: '<app-cart></app-cart>'
            })
            .state('main.history', {
                url: 'history',
                template: '<app-history></app-history>'
            });
    })