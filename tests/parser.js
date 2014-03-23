/**
 * @name
 * @fileOverview
 * @author sergey
 */

var assert = require('chai').assert;
var parser = require('../modules/parser');

describe('Parser', function() {
  describe('getQueries', function() {
    describe('Invalid arguments', function () {
      it('should throw an error', function () {
        assert.throw(parser.getQueries, TypeError, 'invalid arguments');
      });
    });
    var queries = [];
    before(function (done) {
      parser.getQueries('./tests/queries_test.csv').then(function () {
        queries = arguments[0];
        done();
      });
    });
    it('should return array of queries', function() {
      assert.lengthOf(queries, 8);
    });
  });
  describe('getFrequencies', function () {
    describe('Invalid arguments', function () {
      it('should throw an error', function () {
        assert.throw(parser.getFrequencies, TypeError, 'invalid arguments');
      });
    });
    var frequencies = {};
    before(function (done) {
      parser.getFrequencies('./tests/frequencies_test.csv').then(function () {
        frequencies = arguments[0];
        done();
      });
    });
    it('should return the right amount of frequencies', function () {
      assert.lengthOf(Object.keys(frequencies), 8);
    });
    it('frequency should be a number', function () {
      assert.typeOf(frequencies['a'], 'number');
    })
  });
});