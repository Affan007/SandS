'use strict';
/**
 * @ngdoc overview
 * Main module of the application.
 */
 agGrid.initialiseAgGridWithAngular1(angular);
angular.
    module('sands', [

        'ngTouch',
        'ngAnimate',
        'ui.router',
        'oc.lazyLoad',
        'ngSanitize',
        'agGrid'


    ])
    .config(['$stateProvider','$locationProvider','$httpProvider','$ocLazyLoadProvider','$urlRouterProvider',function ($stateProvider,$locationProvider,$httpProvider,$ocLazyLoadProvider,$urlRouterProvider) {
        //$ocLazyLoadProvider.config({
        //    debug:false,
        //    events:true,
        //});
        $urlRouterProvider.otherwise('/');


        //$urlRouterProvider.otherwise('/');

            $stateProvider
                .state('Base', {
                    url:'/',
                    controller: 'base',
                    templateUrl: 'views/base.html',
                    title: 'Upnions|base',
                    resolve: {

                        loadMyDirectives:function($ocLazyLoad){
                            return $ocLazyLoad.load(
                                {
                                    files:[
                                        //'js/scripts.js'
                                    ]
                                })

                        }


                    }

                })
                $stateProvider
                    .state('Details', {
                        url:'/details',
                        controller: 'details',
                        templateUrl: 'views/details.html',
                        title: 'Upnions|details',
                        resolve: {

                            loadMyDirectives:function($ocLazyLoad){
                                return $ocLazyLoad.load(
                                    {
                                        files:[
                                            //'js/scripts.js'
                                        ]
                                    })

                            }


                        }

                    })


        $locationProvider.html5Mode(true);
    }]);

angular.module('sands').run(function($rootScope, $templateCache) {
    $rootScope.$on('$viewContentLoaded', function() {
        $templateCache.removeAll();
    });
});
