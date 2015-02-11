'use strict';

/**
 * @ngdoc function
 * @name tododeskApp.controller:CrudCtrl
 * @description
 * # CrudCtrl
 * Controller of the tododeskApp
 */
angular.module('tododeskApp')
  .controller('CrudCtrl', function ($routeParams, $scope, $location, assignees, tasksList) {
  	console.log($routeParams);

    $scope.assignees = assignees.list;

  	if ($routeParams.id) {
  		$scope.editMode = true;
  		$scope.task = tasksList.data[$routeParams.id];
  	} else {
	    $scope.task = {
	    	description: '',
	    	assignee: '',
	    	dueDate: new Date(),
	    	completed: false
	    };
  	}

    $scope.addTask = function () {
		tasksList.add($scope.task);
		$location.path('/');
    };

    $scope.saveChanges = function () {
		tasksList.update($routeParams.id, $scope.task);
		$location.path('/');
    };
  });
