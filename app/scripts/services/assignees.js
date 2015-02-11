'use strict';

/**
 * @ngdoc service
 * @name tododeskApp.assignees
 * @description
 * # assignees
 * Service in the tododeskApp.
 */
angular.module('tododeskApp')
  .service('assignees', function () {
    // I guess we can call it JSON :P
    this.list = [
        'Vladimir Harkonnen',
        'Duke Leto',
        'Muad\'dib',
        'Gaius Helen Mohiam',
        'Stilgar',
        'Shaddam Corrino IV',
        'Ghanima Atreides'
    ];
  });
