(function () {
    'use strict';
    
    angular
        .module('myApp.socios')
        .controller('sociosController', sociosController);
        
        sociosController.$inject = ['user'];
        
        function sociosController(user) {
            var vm = this;
        
        //Log user to the console
        console.log(user);    
           
        }
})();