class OrderDetails {

    $onInit() {
        console.log("ctrl init", this);
    }

}

export default {
    template: require('./order.details.html'),
    controller: OrderDetails,
    bindings: {
        order: '<'
    }
};