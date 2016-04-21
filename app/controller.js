'use strict';

/* Controllers */

var iNERDE_Controllers = angular.module('iNERDE_Controllers', []);

iNERDE_Controllers.controller('imgCtrl', ['$scope',
          function($scope) {
                      $scope.image = 'images/iNERDE_Logo_black.png';
                        }]);

iNERDE_Controllers.controller('menuCtrl',['$scope',
          function($scope) {
                       $scope.subitems = null;
                           $scope.activeItem = null;
                      $scope.menuitems = menuitems;
                      $scope.showSubMenu = function (menuitem) {
                        return menuitem.mydisplay = "block";
                                           }
                      $scope.hideSubMenu = function (menuitem){
                        return menuitem.mydisplay = "none";
                                           }
          }]);

var menuitems = [
    {
      mydisplay: "none",
      name: 'GIVE',
      subitems : [{name: 'Give Via Generosity (Dec 2015 Campaign)', id:'x'},{name:'Give Via PayPal',id:'y'},{name:'GLOBAL GIVING',id:'global-giving'}]
    },
     { 
      mydisplay: "none",
      name: 'ADOPT-A-NERDY-SCHOOL',
      subitems : [{name:'2015 Partner schools',id:'2015-stem-camps'},
        {name:'L’École du Progrès', id:'lecole-du-progres'},
        {name:'L’École Publique de Badalabougou', id:'lecole-publique'},
        {name:'L’École de la Paix',id:'lecole-de-la-paix'},
        {name:'L’École Les Castors',id:'lecole-les-castors'}]
    },
    {
      mydisplay: "none",
      name: 'ABOUT iNERDE',
      subitems: [{name:'OUR STORY',id:'our-story'},
      {name:'FAQs', id:'faqs'},
      {name:'THE NERDY TEAM',id:'the-nerdy-team'}]
    },
    {
      mydisplay: "none",
      name: 'PROGRAMS',
      subitems: [{name:'2015 STEM CAMP', id:'2015-stem-camp'},{name:'2014 STEM CAMP', id:'2014-stem-camp'},{name:'OUR CURRICULUM', id:'our-curriculum'}]
    },
    {
      mydisplay: "none",
      name: 'NEWS & BLOGS',
      subitems: [{name:'NERDY NEWS', id:'nerdy-news'},{name:'NERDY BLOG', id:'nerdy-blog'},{name:'GALLERY', id:'gallery'}]
    },
    {
      mydisplay: "none",
      name: 'GET INVOLVED',
      subitems: [{name:'VOLUNTEER', id:'volunteer'},{name:'EMPOWERMENT AGENT', id:'empowerment-agent'},{name:'CONTACT', id:'contact'}]
    }];



