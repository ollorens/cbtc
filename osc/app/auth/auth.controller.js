/* global Firebase */
(function(){
    'use strict';
    
    angular
        .module('myApp.auth')
        .controller('AuthController', AuthController)

    AuthController.$inject = ['$location', 'authService'];

    function AuthController($location, authService) {
        var vm = this;
       // var firebaseReference = new Firebase(FIREBASE_URL);
        //var firebaseAuthObject = $firebaseAuth(firebaseReference);

        vm.user = {
            email: '',
            password: ''
        };

        vm.register = register;
        vm.login = login;
        vm.logout = logout;
        vm.isLoggedIn = authService.isLoggedIn;

        function register(user) {
            return authService.register(user)
                .then(function() {
                    vm.login(user);
                })
                .catch(function(error){
                    console.log(error);
                })
                
        }

        function login(user) {
            return authService.login(user)
                .then(function(loggedInUser) {
                    console.log(loggedInUser);
                    $location.path('/socios');
                })
                .catch(function(error) {
                    console.log(error);
                });
        }

        function logout() {
            //firebaseAuthObject.$unauth();
            authService.logout();
            $location.path('/');
        }
    }
    
})();