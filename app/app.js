'use strict';

// Declare app level module which depends on views, and components
var iNERDE_App = angular.module('iNERDE_App', [
  'ngRoute',
  'iNERDE_Controllers',
]);

iNERDE_App.config(['$routeProvider',
        function($routeProvider) {
                $routeProvider.
        when('/global-giving',{
               templateUrl:'partials/give-3.html',
            controller:'menuCtrl'
        }).
        when('/2015-stem-camps',{
                 templateUrl:'partials/adopt-nerdy-school-1.html',
                 controller:'menuCtrl'
        }).
        when('/lecole-du-progres',{
                 templateUrl:'partials/adopt-nerdy-school-2.html',
                 controller:'menuCtrl'
        }).
        when('/lecole-publique',{
                   templateUrl:'partials/adopt-nerdy-school-3.html',
            controller:'menuCtrl'
            }).
        when('/lecole-de-la-paix',{
                     templateUrl:'partials/adopt-nerdy-school-4.html',
                 controller:'menuCtrl'
            }).
        when('/lecole-les-castors',{
                     templateUrl:'partials/adopt-nerdy-school-5.html',
                 controller:'menuCtrl'
            }).
        when('/our-story',{
                   templateUrl:'partials/about-inerde-1.html',
            controller:'menuCtrl'
            }).
        when('/faqs',{
                     templateUrl:'partials/about-inerde-2.html',
                 controller:'menuCtrl'
            }).
        when('/the-nerdy-team',{
                     templateUrl:'partials/about-inerde-3.html',
                 controller:'menuCtrl'
            }).
        when('2015-stem-camp',{
                   templateUrl:'partials/programs-1.html',
            controller:'menuCtrl'
            }).
        when('/2014-stem-camp',{
                     templateUrl:'partials/programs-2.html',
                 controller:'menuCtrl'
            }).
        when('/our-curriculum',{
                     templateUrl:'partials/programs-3.html',
                 controller:'menuCtrl'
            }).
        when('/nerdy-news',{
                       templateUrl:'partials/news-blogs-1.html',
            controller:'menuCtrl'
                }).
        when('/nerdy-blog',{
                         templateUrl:'partials/news-blogs-2.html',
                 controller:'menuCtrl'
                }).
        when('/gallery',{
                         templateUrl:'partials/news-blogs-3.html',
                 controller:'menuCtrl'
                }).
        when('/volunteer',{
                       templateUrl:'partials/get-involved-1.html',
            controller:'menuCtrl'
                }).
        when('/empowerment-agent',{
                         templateUrl:'partials/get-involved-2.html',
                 controller:'menuCtrl'
                }).
        when('/contact',{
                         templateUrl:'partials/get-involved-1.html',
                 controller:'menuCtrl'
                }).        
        otherwise({
                redirectTo: '/#'
        });
}]); 



