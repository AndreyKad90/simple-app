class CartComponent {

    constructor(CartService) {
        this.CartService = CartService;
    }

    $onInit() {
        this.refreshProducts();
    }

    refreshProducts() {
        this.CartService.getProducts()
            .then((products) => {
                this.products = products;
                this.total = products.length ? this.CartService.calculateTotal(products) : 0;
            });
    }

    removeFromCart(id) {
        this.CartService.remove(id)
            .then(() => {
                this.refreshProducts();
            });
    }

    submit() {
        this.CartService.submit()
            .then(() => {
                this.products = [];
                this.total = 0;
            });
    }

}

export default {
    template: require('./cart.html'),
    controller: CartComponent
};