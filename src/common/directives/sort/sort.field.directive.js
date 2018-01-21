import { ORDER_TYPE } from './order.type';

const DIR_NAME = SortFieldDirective.DIR_NAME = 'appSortField'; 

export default function SortFieldDirective() {
    return {
        require: ['^appSort'],
        link(scope, element, attrs, [appSortCtrl]) {
            const field = attrs[DIR_NAME];
            const SORT_CLASS = {
                ASC: 'sort-asc',
                DESC: 'sort-desc',
                NEUTRAL: 'sort-neutral'
            };
            
            element.on('click', () => {
                scope.$apply(appSortCtrl.sort(field));
            });

            const clearSortClasses = () => {
                Object.values(SORT_CLASS).forEach((sortClass) => element.removeClass(sortClass));
            };

            const addSortClass = () => {
                clearSortClasses();
                const sortObj = appSortCtrl.getSortObj();

                if (field === sortObj.field) {
                    const orderClass = sortObj.order === ORDER_TYPE.ASC 
                        ? SORT_CLASS.ASC 
                        : SORT_CLASS.DESC;

                    element.addClass(orderClass);
                } else {
                    element.addClass(SORT_CLASS.NEUTRAL);
                }
            };

            addSortClass();

            // Listen for changes in any sort field so that icons can be adjusted
            scope.$on('sort', addSortClass);
        }
    };
}