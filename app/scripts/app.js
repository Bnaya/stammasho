'use strict';

/**
 * @ngdoc overview
 * @name tododeskApp
 * @description
 * # tododeskApp
 *
 * Main module of the application.
 */
angular
  .module('tododeskApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    var todo = {
        templateUrl: 'views/todo.html',
        controller: 'TodoCtrl'
    };

    $routeProvider
      .when('/', todo)
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/todo', todo)
      .when('/crud', {
        templateUrl: 'views/crud.html',
        controller: 'CrudCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
