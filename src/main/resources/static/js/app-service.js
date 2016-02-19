/**
 * Services goes here
 */

// Signup service
ngdemoapp.factory('SignupService', signupService);
signupService.$inject = [ '$http', '$q' ];

function signupService($http, $q) {
	var uid = 0;
	var users = [ {
		id : 0,
		'name' : 'Raju',
		'email' : 'rpatel@gmail.com'
	} ];

	var service = {};
	service.Signup = signup;
	return service;

	function signup(user) {
		var deferred = $q.defer();

		uid++;
		user.id = uid;
		users.push(user);

		console.log("  user.id :: " + user.id + ",  user.name :: " + user.name
				+ ",  user.email :: " + user.email);
		console.log("  users :: " + users);

		deferred.resolve({
			success : true
		});
		return deferred.promise;
	}
}

// Authentication service
/*
 * ngdemoapp.factory('AuthService', authService); AuthService.$inject =
 * ['$http', '$cookieStore', '$rootStore', 'SignupService'];
 * 
 * function authService($http, $cookieStore, $rootStore, SignupService){
 * 
 * var service = {}; service.Login = login; service.SetCredentials =
 * setCredentials; service.ClearCredentials = clearCredentials; return service;
 * 
 * function login(){
 *  }
 * 
 * function setCredentials(){
 *  }
 * 
 * function clearCredentials(){
 *  }
 * 
 *  }
 */
