import angular from 'angular';

import SortDirective from './sort/sort.directive';
import SortFieldDirective from './sort/sort.field.directive';

export const DirectivesModule = angular
    .module('app.common.directives', [])
    .directive(SortDirective.DIR_NAME, SortDirective)
    .directive(SortFieldDirective.DIR_NAME, SortFieldDirective)
    .name;