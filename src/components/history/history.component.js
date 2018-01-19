class HistoryComponentCtrl {

    $onInit() {
        console.log("ctrl init");
    }

}

export const HistoryComponent = {
    template: require('./history.html'),
    controller: HistoryComponentCtrl
};