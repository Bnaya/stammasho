'use strict';

/**
 * @ngdoc function
 * @name tododeskApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the tododeskApp
 */
angular.module('tododeskApp')
  .controller('TodoCtrl', function ($scope, $location, tasksList) {
    $scope.todoTasks = tasksList.data;
    $scope.predicate = 'dueDate';

	$scope.$watch('todoTasks', function() {
		tasksList.persistCurrentState();
	}, true);

	$scope.gotoAddTask = function () {
		$location.path('crud');
	};

	$scope.gotoEditTask = function (taskIndex) {
		$location.path('crud/' + taskIndex);
	};
  });
