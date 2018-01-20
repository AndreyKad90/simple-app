class ProductsComponent {

    constructor(ProductsService, CartService) {
        this.ProductsService = ProductsService;
        this.CartService = CartService;
    }

    $onInit() {
        this.sort = {
            field: 'price',
            order: 'ASC'
        };
        this.ProductsService.getAllProducts()
            .then(products => {
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
        this.products = this.productsCopy.filter(product => product.name.includes(query));
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
        if (product) {
            this.CartService.add(product);
        }   
    }

}

export default {
    template: require('./products.html'),
    controller: ProductsComponent
};