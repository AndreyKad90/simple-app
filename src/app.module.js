// external dependencies
import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

// external style dependencies
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

// project dependencies
import './styles.css';
import { CommonModule } from './common/common.module';
import { ComponentsModule } from './components/components.module';

angular
    .module('app', [
        uiRouter,

        CommonModule,
        ComponentsModule
    ])
    .config(($stateProvider, $urlRouterProvider) => {
        // TODO: replace the routes from here
        $stateProvider
            .state('main', {
                url: '/',
                abstract: true,
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
            .state('main.orders', {
                url: 'orders',
                template: '<app-orders></app-orders>'
            });

        $urlRouterProvider.otherwise('/products');
    });