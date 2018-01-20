import angular from 'angular';

import NavbarComponent from './navbar.component';
import NavbarLinkComponent from './navbar.link.component';

export const NavbarModule = angular
    .module('app.common.navbar', [])
    .component('appNavbar', NavbarComponent)
    .component('appNavbarLink', NavbarLinkComponent)
    .name;