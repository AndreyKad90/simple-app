export default class OrdersService {

    constructor($http) {
        this.$http = $http;
    }

    getAllOrders() {
        return this.$http.get('/api/orders')
            .then(({data}) => data);
    }

}