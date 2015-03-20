'use strict';

/**
 * @ngdoc function
 * @name fortySevenApp.controller:AboutController
 * @description
 * # AboutCtrl
 * Controller of the fortySevenApp
 */
angular.module('fortySevenApp')
  .controller('AboutController', function($rootScope, $scope, $timeout) {
    //About 47Billion Page.

    $scope.$on('$viewContentLoaded', function() {
       $timeout(function(){
          $rootScope.hideSpinner = true;
      },1000);
    });
    $scope.pageClass = 'page-about';

    $scope.partner = 'pg';

    $scope.changePartner = function(name){
        console.log(name );
      $scope.partner = name;
    };

        $('.nav-tabs[data-toggle="tab-hover"] > li > a').hover( function(){
            $(this).tab('show');
        });

    $scope.changeCity  = function(city){
      $scope.city = city;
    }
  });
