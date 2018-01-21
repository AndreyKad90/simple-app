class ProductsComponent {

    constructor(ProductsService, CartService, $timeout) {
        this.ProductsService = ProductsService;
        this.CartService = CartService;
        this.$timeout = $timeout;
        this.message = {};
    }

    $onInit() {
        this.sort = {
            field: 'price',
            order: 'ASC'
        };
        this.ProductsService.getAllProducts()
            .then((products) => {
                this.productsCopy = products.map(this.transformProduct);
                this.products = this.productsCopy.slice();
            });
    }

    transformProduct(product) {
        return Object.assign({}, product, {
            ingredients: product.ingredients.join(',')
        });
    }

    filterProducts(query) {
        const lowerCaseQuery = query.toLowerCase();
        this.products = this.productsCopy.filter((product) => {
            return product.name.toLowerCase().includes(lowerCaseQuery);
        });
    }

    sortProducts() {
        const {field, order} = this.sort;
        let sortFn;

        if (order === 'ASC') {
            sortFn = (a, b) => a[field] - b[field];
            this.sort.order = 'DESC';
        } else {
            sortFn = (a, b) => b[field] - a[field];
            this.sort.order = 'ASC';
        }

        this.products = this.productsCopy.sort(sortFn);
    }

    addToCart(product) {
        this.CartService.add(product)
            .then((message) => this.setMessage(message))
            .catch((err) => this.setMessage(err, true));
    }

    setMessage(message, error = false) {
        this.message.text = message;
        this.message.error = error;

        if (this.timeoutId) {
            this.$timeout.cancel(this.timeoutId);
        }

        this.timeoutId = this.$timeout(() => {
            this.message.text = '';
        }, 3000);
    }

    $onDestroy() {
        this.$timeout.cancel(this.timeoutId);
    }

}

export default {
    template: require('./products.html'),
    controller: ProductsComponent
};