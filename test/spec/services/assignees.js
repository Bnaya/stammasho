'use strict';

describe('Service: assignees', function () {

  // load the service's module
  beforeEach(module('tododeskApp'));

  // instantiate service
  var assignees;
  beforeEach(inject(function (_assignees_) {
    assignees = _assignees_;
  }));

  it('should do something', function () {
    expect(!!assignees).toBe(true);
  });

});
