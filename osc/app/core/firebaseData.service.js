(function() {
    'use strict';

    angular
        .module('myApp.core')
        .factory('firebaseDataService', firebaseDataService);

    firebaseDataService.$inject = ['FIREBASE_URL'];
    
    function firebaseDataService(FIREBASE_URL) {
        var root = new Firebase(FIREBASE_URL);

        var service = {
            root: root
        };

        return service;
    }
})();