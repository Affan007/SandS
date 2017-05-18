'use strict';
angular.module('sands')
	.factory('User',['$http','$location','$q','$rootScope','configFactory','$window', function($http ,$location,$q,$rootScope,configFactory,$window) {
		//var ServerAdress = configFactory.serverAddress;
		var domain = configFactory.serverAddress;
		var userdata=null;
		var recivedData=null;
		var baseDetails=null;
		var data ;

		return {

		FetchComments : function(UserData){
			return $http.get("http://jsonplaceholder.typicode.com/comments"+"?_start="+UserData.start+"&_limit="+UserData.end, {
			}).success(function(data, status, headers, config){
			});
		},

		FetchTotal : function(a,b){
			return $http.get("http://jsonplaceholder.typicode.com/comments"+"?_start="+a+"&_limit="+b, {
			}).success(function(data, status, headers, config){
			});
		},

		DetailsStore:function(UserData){
			baseDetails=UserData;
		},
		RetriveDetails:function(){
			return baseDetails ;

		},
		}
	}]);
