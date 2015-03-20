'use strict';

/**
 * @ngdoc overview
 * @name fortySevenApp
 * @description
 * # fortySevenApp
 *
 * Main module of the application.
 */
angular
  .module('fortySevenApp', [
    'ngAnimate',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .when('/main', {
        templateUrl: 'views/about.html',
        controller: 'AboutController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function($http, $templateCache){
      var templates = ['views/main.html', 'views/about.html', 'images/logo-47b.png', 'images/cisco-logo.png',
      'images/cavo-logo.png', 'images/nextmail-logo.png', 'images/lsquared-logo.png', 'images/map.png', 'images/personagraph-logo.png'];
      angular.forEach(templates, function(templateUrl){
        $http({method: 'GET', url: templateUrl}).success(function(data) {
        $templateCache.put(templateUrl, data);
      });
      });

  });
