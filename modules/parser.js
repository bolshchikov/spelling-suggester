/**
 * @name
 * @fileOverview
 * @author sergey
 */

var csv = require('csv'),
    Q = require('q');

var QUERIES_PATH = './input/misspelled_queries.csv';
var FREQUENCY_PATH = './input/word_frequency.csv';

function parseQueries() {
  var dfd = Q.defer();
  var results = [];
  csv()
    .from.path(QUERIES_PATH)
    .on('data', function (row) {
      // with removed newlines
      results.push(row.replace(/^\s+|\s+$/g, ''));
    })
    .on('end', function () {
      dfd.resolve(results);
    });
  return dfd.promise;
}

function parseFrequencies() {}

module.exports = {
  getQueries: parseQueries,
  getFrequencies: parseFrequencies
};
