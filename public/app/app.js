var app = angular.module('myapp', ['myapp.controllers', 'myapp.directives']);

app.config(['$routeProvider', function ($routeProvider) {
    
    $routeProvider.when('/', {
        templateUrl: 'partials/index2',
        controller: 'IndexController'
    })
    .when('/dashboard', {
            templateUrl: 'partials/reportView',
            controller: 'dashboard'
        })
    .when('/signup', {
            templateUrl: 'partials/signup',
            controller: 'Signup'
        })
    .otherwise({
        redirectTo: '/'
    });
}]).config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
}]);