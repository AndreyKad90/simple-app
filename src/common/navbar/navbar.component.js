class NavbarComponentCtrl {

    $onInit() {
        console.log("navbar init");
    }

}

export const NavbarComponent = {
    template: require('./navbar.html'),
    controller: NavbarComponentCtrl
};