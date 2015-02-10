'use strict';

/**
 * @ngdoc function
 * @name tododeskApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tododeskApp
 */
angular.module('tododeskApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
