myApp.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'src/sections/home/home.tpl.html',
        controller: 'HomeController'
    }).when('/suma', {
        templateUrl: 'src/sections/suma/suma.tpl.html',
        controller: 'SumaController'
    }).when('/resta', {
        templateUrl: 'src/sections/resta/resta.tpl.html',
        controller: 'RestaController'
    }).when('/multi', {
        templateUrl: 'src/sections/multi/multi.tpl.html',
        controller: 'MultiController'
    }).when('/division', {
        templateUrl: 'src/sections/division/division.tpl.html',
        controller: 'DivisionController'
    }).otherwise({
        redirectTo: '/'
    });
});