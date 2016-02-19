/**
 * Controllers goes here
 */

ngdemoapp.controller('navigationCtrl', function($rootScope, $scope, $http,
		$location, $route) {

	// console.log(" scope.selectedTab :: "+$scope.selectedTab);
	
	/*
	 * $scope.tab = function(route) { return $route.current && route ===
	 * $route.current.controller; };
	 */

	/*
	 * var authenticate = function(credentials, callback) {
	 * 
	 * var headers = credentials ? { authorization : "Basic " +
	 * btoa(credentials.username + ":" + credentials.password) } : {};
	 * 
	 * $http.get('user', { headers : headers }).success(function(data) { if
	 * (data.name) { $rootScope.authenticated = true; } else {
	 * $rootScope.authenticated = false; } callback &&
	 * callback($rootScope.authenticated); }).error(function() {
	 * $rootScope.authenticated = false; callback && callback(false); }); }
	 * 
	 * authenticate();
	 * 
	 * $scope.credentials = {}; $scope.login = function() {
	 * authenticate($scope.credentials, function(authenticated) { if
	 * (authenticated) { console.log("Login succeeded") $location.path("/");
	 * $scope.error = false; $rootScope.authenticated = true; } else {
	 * console.log("Login failed") $location.path("/login"); $scope.error =
	 * true; $rootScope.authenticated = false; } }) };
	 * 
	 * $scope.logout = function() { $http.post('logout', {}).success(function() {
	 * $rootScope.authenticated = false; $location.path("/");
	 * }).error(function(data) { console.log("Logout failed")
	 * $rootScope.authenticated = false; }); }
	 */

});

ngdemoapp.controller('homeCtrl', function($scope, $http) {
	$scope.selectedTab = 1;
	
	/*
	 * $http.get('home').success(function(data) { $scope.greeting = data; })
	 */
});

ngdemoapp.controller('notFoundCtrl', function($scope) {
	$scope.message = "There seems to be a problem finding page you wanted";
	// $scope.attemptedPath = $location.path();
});

ngdemoapp.controller('loginCtrl', function($scope, $http) {

	
	
});

ngdemoapp.controller('signupCtrl', signupCtrl);

signupCtrl.$inject = ['SignupService', '$location', '$rootScope'];

function signupCtrl(SignupService, $location, $rootScope) {

	var sup = this;
	sup.signup = signup;
	
	function signup(){
		SignupService.Signup(sup.user)
		.then(function (response) {
            if (response.success) {
            	console.log(" Registration successful ");
                //FlashService.Success('Registration successful', true);
                $location.path('/login');
            } else {
                //FlashService.Error(response.message);
                //vm.dataLoading = false;
            	console.log(" Failed ");
            }
		});
		
	}
	
}