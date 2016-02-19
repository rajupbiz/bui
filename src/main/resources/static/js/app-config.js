/**
 * Routing goes here
 */

ngdemoapp
		.config(function($routeProvider, $httpProvider, $locationProvider) {

			$routeProvider.when('/', {
				templateUrl : 'templates/home.html',
				controller : 'homeCtrl',
				controllerAs : 'home'
			}).when('/signup', {
				templateUrl : 'templates/signup.html',
				controller : 'signupCtrl',
				controllerAs : 'signup'
			}).when('/login', {
				templateUrl : 'templates/login.html',
				controller : 'loginCtrl',
				controllerAs : 'login'
			}).when('/about', {
				templateUrl : 'templates/about.html',
				controller : 'navigationCtrl',
				controllerAs : 'navigation'
			}).when('/contact', {
				templateUrl : 'templates/contact.html',
				controller : 'navigationCtrl',
				controllerAs : 'navigation'
			}).when('/tour', {
				templateUrl : 'templates/tour.html',
				controller : 'navigationCtrl',
				controllerAs : 'navigation'
			}).otherwise({
				// when all else fails
				
				redirectTo: '/login'
				
				/*templateUrl : 'templates/routeNotFound.html',
				controller : 'notFoundCtrl'*/
			});

			$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

			/*$locationProvider.html5Mode({
				enabled : true,
				requireBase : false
			});*/
		});
