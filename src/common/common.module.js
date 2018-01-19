import angular from 'angular';
import { BaseComponent } from './base/base.component';
import { NavbarComponent } from './navbar/navbar.component';

export const CommonModule = angular
    .module('app.common', [])
    .component('appBase', BaseComponent)
    .component('appNavbar', NavbarComponent)
    .name;