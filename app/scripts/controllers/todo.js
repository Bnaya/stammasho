'use strict';

/**
 * @ngdoc function
 * @name tododeskApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the tododeskApp
 */
angular.module('tododeskApp')
  .controller('TodoCtrl', function ($scope, tasksList) {
    $scope.todoTasks = tasksList.data.todoTasks;
    $scope.doneTasks = tasksList.data.doneTasks;
    $scope.predicate = 'dueDate';
  });
