class OrderDetails {

}

export default {
    template: require('./order.details.html'),
    controller: OrderDetails,
    bindings: {
        order: '<'
    }
};