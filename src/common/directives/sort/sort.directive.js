import { ORDER_TYPE } from './order.type';

const DIR_NAME = SortDirective.DIR_NAME = 'appSort';

class SortDirectiveCtrl {
    constructor($scope, $element, $attrs) {
        this.collectionName = $attrs[`${DIR_NAME}Name`] || 'collection';
        this.$scope = $scope;
        this.sortObj = {
            order: $attrs[`${DIR_NAME}DefaultOrder`] || ORDER_TYPE.ASC,
            field: $attrs[`${DIR_NAME}DefaultField`]
        };

        // TODO: figure out why parent scope is not used here via '$scope', even though 
        // the directive's scope property is set to false by default
        this.$scope.$watch($attrs[DIR_NAME], (newValue) => {
            if (newValue) {
                this.collectionCopy = newValue.slice();
                this.sort(this.sortObj.field, true);
            }
        });
    }

    getSortObj() {
        return Object.assign({}, this.sortObj);
    }

    sort(field, noReverse) {
        let sortFn;
        let isAscOrder = this.sortObj.order === ORDER_TYPE.ASC;
        
        if (noReverse) {
            sortFn = isAscOrder ? this.sortAsc : this.sortDesc;
        } else {
            if (field === this.sortObj.field) {
                sortFn = isAscOrder ? this.sortDesc : this.sortAsc;
                this.sortObj.order = isAscOrder ? ORDER_TYPE.DESC : ORDER_TYPE.ASC;
            } else {
                // by default, set the order to ascending
                this.sortObj.field = field;
                this.sortObj.order = ORDER_TYPE.ASC;
                sortFn = this.sortAsc;
            }
        }

        this.$scope[this.collectionName] = this.collectionCopy.sort(sortFn(field));
        this.$scope.$broadcast('sort', this.sortObj);
    }

    /*
        sortDesc and sortAsc are separate function in order to avoid additional checks
        for ASC|DESC while iterating over collections. Additionally, it does not use 
        the shorter syntax, a - b, because values can be strings 
    */
    sortDesc(field) {
        return (a, b) => {
            const aField = a[field],
                bField = b[field];
          
            if (aField > bField) {
                return -1;
            }
    
            if (aField < bField) {
                return 1;
            }
    
            return 0;
        };
    }

    sortAsc(field) {
        return (a, b) => {
            const aField = a[field],
                bField = b[field];

            if (aField > bField) {
                return 1;
            }
    
            if (aField < bField) {
                return -1;
            }
    
            return 0;
        };
    }
}



export default function SortDirective() {
    return {
        require: `${DIR_NAME}DefaultField`,
        controller: SortDirectiveCtrl
    };
}