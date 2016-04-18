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
      subitems : [{name: 'Give Via Generosity (Dec 2015 Campaign)', id:'gvfd2015'},{name:'Give Via PayPal',id:'y'},{name:'GLOBAL GIVING',id:'z'}]
    },
     { 
      mydisplay: "none",
      name: 'ADOPT-A-NERDY-SCHOOL',
      subitems : [{name:'2015 Partner schools',id:'x2'},{name:'L’École du Progrès', id:'y2'},
        {name:'L’École Publique de Badalabougou', id:'z2'},
        {name:'L’École de la Paix',id:'l2'},
        {name:'L’École Les Castors',id:'m2'}]
    },
    {
      mydisplay: "none",
      name: 'ABOUT iNERDE',
      subitems: [{name:'OUR STORY',id:'x2'},
      {name:'FAQs', id:'y2'},
      {name:'THE NERDY TEAM',id:'z2'}]
    },
    {
      mydisplay: "none",
      name: 'PROGRAMS',
      subitems: [{name:'2015 STEM CAMP', id:'x3'},{name:'2014 STEM CAMP', id:'x3'},{name:'OUR CURRICULUM', id:'x3'}]
    },
    {
      mydisplay: "none",
      name: 'NEWS & BLOGS',
      subitems: [{name:'NERDY NEWS', id:'x3'},{name:'NERDY BLOG', id:'x3'},{name:'GALLERY', id:'x3'}]
    },
    {
      mydisplay: "none",
      name: 'GET INVOLVED',
      subitems: [{name:'VOLUNTEER', id:'x3'},{name:'EMPOWERMENT AGENT', id:'x3'},{name:'CONTACT', id:'x3'}]
    }];



