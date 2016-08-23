(function(){
    'use strict';
    
    angular
        .module('myApp.socios')
        .config(configFunction)
        
    configFunction.$inject = ['$routeProvider'];        
        
    function configFunction($routeProvider) {        
        $routeProvider
            .when('/socios',{
            templateUrl: 'socios/socios.html',
            controller: 'sociosController',
            controllerAs: 'vm',
            resolve: {user: resolveUser}
        });
    }

    resolveUser.$inject = ['authService']
    
    function resolveUser(authService) {
        return authService.firebaseAuthObject.$requireAuth();
    }
    
})();