export default class OrdersService {

    constructor($http) {
        this.$http = $http;
    }

    getAllOrders() {
        return this.$http.get('/api/orders')
            .then(({data}) => this.sortByDate(data));
    }

    sortByDate(orders) {
        return orders.sort((a, b) => b.date - a.date);
    }

    calculateTotal(orders) {
        return orders.reduce((total, order) => total + order.total, 0);
    }
}