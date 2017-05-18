'use strict';
angular.module('sands')
    .factory('configFactory', function($http) {
        var serviceObj = {
            "serverAddress" : "http://api.upinions.net",
            "IP" : "localhost"
        }
        return serviceObj;
    });
