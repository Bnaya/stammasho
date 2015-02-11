'use strict';

/**
 * @ngdoc function
 * @name tododeskApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the tododeskApp
 */
angular.module('tododeskApp')
  .controller('TodoCtrl', function ($scope) {
    $scope.todoTasks = [
      {
      	task: 'Get more spice',
      	dueDate: 1,
      	assignee: 'Vladimir harkonnen'
      }
    ];

    $scope.doneTasks = [
      {
      	task: 'Be fat',
      	dueDate: 1,
      	assignee: 'Vladimir harkonnen'
      }
    ];
  });
