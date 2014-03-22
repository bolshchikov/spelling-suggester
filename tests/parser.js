/**
 * @name
 * @fileOverview
 * @author sergey
 */

var assert = require('assert');
var parser = require('../modules/parser');

describe('Parser', function() {
  describe('getQueries', function() {
    var queries = [];
    before(function (done) {
      parser.getQueries('./tests/queries_test.csv').then(function () {
        queries = arguments[0];
        done();
      });
    });
    it('should return array of queries', function() {
      assert.equal(8, queries.length);
    });
  });
  describe('getFrequencies', function () {
    var frequencies = {};
    before(function (done) {
      parser.getFrequencies('./tests/frequencies_test.csv').then(function () {
        frequencies = arguments[0];
        done();
      });
    });
    it('should return the right amount of frequencies', function () {
      assert.equal(8, Object.keys(frequencies).length);
    });
    it('frequency should be a number', function () {
      assert.equal('number', typeof frequencies['a']);
    })
  });
});