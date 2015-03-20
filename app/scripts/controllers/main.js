'use strict';

/**
 * @ngdoc function
 * @name fortySevenApp.controller:MainController
 * @description
 * # MainController
 * Controller of the fortySevenApp
 */
angular.module('fortySevenApp')
  .controller('MainController', function($rootScope, $scope, $location, $timeout) {
    //47Billion home page.

        $scope.$on('$viewContentLoaded', function() {
            $timeout(function(){
                $rootScope.hideSpinner = true;
                $scope.changeMessage();
            },1000);
        });

        $scope.message = 'brands';
        $scope.pageClass = 'page-home';
        $scope.showAboutUsNav = false;
        var messages = ['startups', 'products', 'cloud', 'mobile', 'uexp', 'you'];
        var i=0;

        $scope.changeMessage = function(){
            if(i==0 && messages.length > 0){
                $scope.message = messages[i];
            }
            $timeout(function(){
                if(i==messages.length-1){
                    $scope.showAboutUsNav = true;
                    return;
                }
                i++;
                $scope.message = messages[i];

                if(i<=messages.length-1){
                    $scope.changeMessage();
                }
            },1500);
    };
    var w = $(window).width();
    var h = $(window).height(); 
    $('.cd-intro').css({'width': w+'px', height:h+'px'});
    var r = function fixLandingPage(){
        w = $(window).width();
        h = $(window).height(); 
        $('.cd-intro').css({'width': w+'px', height:h+'px'});
    }
    $(window).resize(r);
    $(window).load(r);
  });
