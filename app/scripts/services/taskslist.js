'use strict';

/**
 * @ngdoc service
 * @name tododeskApp.tasksList
 * @description
 * # tasksList
 * Service in the tododeskApp.
 */

var seedData = {
	todoTasks: [{
      	task: 'do me',
      	dueDate: 10,
      	assignee: 'none dooer'
	}, {
      	task: 'do me 2',
      	dueDate: 3,
      	assignee: 'none dooer 2'
	}, {
      	task: 'do me 3',
      	dueDate: 5,
      	assignee: 'none dooer 3'
	}],
	doneTasks: [{
      	task: 'im done',
      	dueDate: 1,
      	assignee: 'dooer'
	}]
};

var tasksList = function () {
	this.populateInitialData();
};

tasksList.prototype.addTask = function (task, assignee, dueDate) {
	this.persistCurrentState();
};

tasksList.prototype.deleteTask = function (id) {
	this.persistCurrentState();
};

tasksList.prototype.editTask = function (id, task, assignee, dueDate) {
	this.persistCurrentState();
};

tasksList.prototype.populateInitialData = function () {
	try {
		this.data = angular.fromJson(window.localStorage.getItem('tasksList'));
		if (!this.data) {
			throw 'no data';
		}
	} catch (e) {
		this.data = seedData;
	}
};

tasksList.prototype.persistCurrentState = function () {
	window.localStorage.setItem('tasksList', angular.toJson(this.data));
};

angular.module('tododeskApp')
  .service('tasksList', tasksList);
