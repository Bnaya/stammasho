'use strict';

/**
 * @ngdoc function
 * @name tododeskApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tododeskApp
 */
angular.module('tododeskApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
