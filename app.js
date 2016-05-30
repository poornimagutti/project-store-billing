var appStore = angular.module('appStore1', ['ngRoute', 'ui.bootstrap']);
appStore.config(function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'views/home.html',
        controller: 'mainController'
    }).when('/login', {
        templateUrl: 'views/login.html',
        controller: 'loginController'
    }).when('/productlist', {
        templateUrl: 'views/productlist.html',
        controller: 'productController'
    }).otherwise({
        redirectTo: '/home'
    });
});
appStore.run(function($rootScope, $location) {
    $rootScope.isSignedIn = false;
    $rootScope.logout = function() {
        $rootScope.isSignedIn = false;
        $location.path('/login');
    }
});
