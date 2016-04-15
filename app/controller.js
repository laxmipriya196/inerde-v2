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
      subitems : ['Give Via Generosity (Dec 2015 Campaign)','Give Via PayPal','GLOBAL GIVING']
    },
     { 
      mydisplay: "none",
      name: 'ADOPT-A-NERDY-SCHOOL',
      subitems : ['2015 Partner schools','L’École du Progrès','L’École Publique de Badalabougou','L’École de la Paix','L’École Les Castors']
    },
    {
      mydisplay: "none",
      name: 'ABOUT iNERDE',
      subitems: ['OUR STORY','FAQs','THE NERDY TEAM']
    },
    {
      mydisplay: "none",
      name: 'PROGRAMS',
      subitems: ['2015 STEM CAMP','2014 STEM CAMP','OUR CURRICULUM']
    },
    {
      mydisplay: "none",
      name: 'NEWS & BLOGS',
      subitems: ['NERDY NEWS','NERDY BLOG','GALLERY']
    },
    {
      mydisplay: "none",
      name: 'GET INVOLVED',
      subitems: ['VOLUNTEER','EMPOWERMENT AGENT','CONTACT']
    }];



