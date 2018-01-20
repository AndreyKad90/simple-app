import angular from 'angular';

import BaseComponent from './base/base.component';
import { NavbarModule } from './navbar/navbar.module';

export const CommonModule = angular
    .module('app.common', [
        NavbarModule,
    ])
    .component('appBase', BaseComponent)
    .name;