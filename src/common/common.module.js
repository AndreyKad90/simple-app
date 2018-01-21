import angular from 'angular';

import BaseComponent from './base/base.component';
import { NavbarModule } from './navbar/navbar.module';
import { DirectivesModule } from './directives/directives.module';

export const CommonModule = angular
    .module('app.common', [
        NavbarModule,
        DirectivesModule
    ])
    .component('appBase', BaseComponent)
    .name;