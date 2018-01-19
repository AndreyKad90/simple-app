class BaseComponentCtrl {

    $onInit() {
        console.log("base init");
    }

}

export const BaseComponent = {
    template: require('./base.html'),
    controller: BaseComponentCtrl
};