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
});