'use strict';

/**
 * @ngdoc function
 * @name tododeskApp.controller:CrudCtrl
 * @description
 * # CrudCtrl
 * Controller of the tododeskApp
 */
angular.module('tododeskApp')
  .controller('CrudCtrl', function ($scope, $location, assignees, tasksList) {
    $scope.assignees = assignees.list;
    $scope.task = {
    	description: '',
    	assignee: '',
    	dueDate: '',
    	completed: false
    };

    $scope.addTask = function () {
		tasksList.add($scope.task);
		$location.path('/')
    };
  });
