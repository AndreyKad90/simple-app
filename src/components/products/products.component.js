class ProductsComponentCtrl {

    $onInit() {
        console.log("ctrl init");
    }

}

export const ProductsComponent = {
    template: require('./products.html'),
    controller: ProductsComponentCtrl
};