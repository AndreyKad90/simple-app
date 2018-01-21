const PRODUCT_STORAGE_KEY = 'products';
const storage = localStorage;

function updateProductsInStore(products) {
    storage.setItem(PRODUCT_STORAGE_KEY, JSON.stringify(products));
}

function getProductsFromStore() {
    return JSON.parse(storage.getItem(PRODUCT_STORAGE_KEY));
}

function clearProductsFromStore() {
    storage.removeItem(PRODUCT_STORAGE_KEY);
}

export default class CartService {

    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
        this.products = getProductsFromStore() || [];
    }

    add(product) {
        if (!product) {
            return $q.reject('The product is invalid');
        }

        const { $q, products } = this;
        const productExists = products.find((prod) => prod.id === product.id);

        if (productExists) {
            return $q.reject(`The product "${product.name}" is already in the cart`);
        }

        products.push(product);
        updateProductsInStore(products);

        return $q.resolve(`The product "${product.name}" has been added to the cart`);
    }

    remove(idToRemove) {
        this.products = this.products.filter(({id}) => id !== idToRemove);
        updateProductsInStore(this.products);

        return this.$q.resolve();
    }

    getProducts() {
        const products = this.products || getProductsFromStore();
        
        return this.$q.resolve(products);
    }

    submit() {
        return this.getProducts()
            .then((products) => {
                return this.$http.post('/api/orders', {
                    date: Date.now(),
                    total: this.calculateTotal(products),
                    products
                });
            })
            .then(() => this.clearProducts())
            .then(() => 'Your order has been successfully submitted');
    }

    clearProducts() {
        this.products = [];
        clearProductsFromStore();
    }

    calculateTotal(products) {
        return products.reduce((total, product) => total + product.price, 0);
    }

}