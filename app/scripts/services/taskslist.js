'use strict';

/**
 * @ngdoc service
 * @name tododeskApp.tasksList
 * @description
 * # tasksList
 * Service in the tododeskApp.
 */

var seedData = [
		{
      	description: 'do me',
      	dueDate: 9999999999,
      	assignee: 'none dooer',
      	completed: false
	}, {
      	description: 'do me 2',
      	dueDate: 3,
      	assignee: 'none dooer 2',
      	completed: false
	}, {
      	description: 'do me 3',
      	dueDate: 999999999,
      	assignee: 'none dooer 3',
      	completed: true
	}
];

var tasksList = function () {
	this.populateInitialData();
};

tasksList.prototype.add = function (task) {
	this.data.push(task);
	this.persistCurrentState();
};

tasksList.prototype.deleteTask = function (index) {
	throw 'Not implamented yet. ' + index;
};

tasksList.prototype.editTask = function (index, task) {
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
