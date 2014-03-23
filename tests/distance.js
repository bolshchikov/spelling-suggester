/**
 * @name
 * @fileOverview
 * @author sergey
 */

var assert = require('chai').assert;
var distance = require('../modules/distance');

describe('Distance', function () {
  describe('Invalid arguments', function () {
    it('should throw an error', function () {
      assert.throw(distance.calculate, TypeError, 'invalid arguments');
    });
  });
  describe('Distance of 0', function () {
    var dist;
    before(function (done) {
      dist = distance.calculate('', '');
      done();
    });
    it('should return the distance with length 0', function () {
      assert.equal(0, dist);
    });
  });
  describe('Distance of 1', function () {
    var dist;
    before(function (done) {
      dist = distance.calculate('rerries', 'ferries');
      done();
    });
    it('should return the distance with length 1', function () {
      assert.equal(1, dist);
    });
  });
  describe('Distance of 2', function () {
    var dist;
    before(function (done) {
      dist = distance.calculate('vaps', 'lap');
      done();
    });
    it('should return the distance with length 2', function () {
      assert.equal(2, dist);
    });
  });
});
