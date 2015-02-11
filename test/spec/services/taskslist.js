'use strict';

describe('Service: tasksList', function () {

  // load the service's module
  beforeEach(module('tododeskApp'));

  // instantiate service
  var tasksList;
  beforeEach(inject(function (_tasksList_) {
    tasksList = _tasksList_;
  }));

  it('should do something', function () {
    expect(!!tasksList).toBe(true);
  });

});
