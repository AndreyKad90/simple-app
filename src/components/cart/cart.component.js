class CartComponentCtrl {

    $onInit() {
        console.log("ctrl init");
    }

}

export const CartComponent = {
    template: require('./cart.html'),
    controller: CartComponentCtrl
};