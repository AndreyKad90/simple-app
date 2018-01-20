export default class ProductsService {

    constructor($http) {
        this.$http = $http;
    }

    getAllProducts() {
        return this.$http.get('/api/products')
            .then(({data}) => data);
    }

}