class OrdersComponent {

    constructor(OrdersService, dateFilter) {
        this.OrdersService = OrdersService;
        this.dateFilter = dateFilter;
    }
    
    $onInit() {
        this.getOrders();
    }

    getOrders() {
        this.OrdersService.getAllOrders()
            .then((orders) => {
                this.orders = orders;
                this.total = this.OrdersService.calculateTotal(orders);
            });
    }

    toggleOrderDetails(order) {
        order.show = !order.show;
    }

}

export default {
    template: require('./orders.html'),
    controller: OrdersComponent
};