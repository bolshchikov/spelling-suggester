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
  var queries = [];
  csv()
    .from.path(QUERIES_PATH)
    .on('data', function (row) {
      // with removed newlines
      queries.push(row.replace(/^\s+|\s+$/g, ''));
    })
    .on('end', function () {
      dfd.resolve(queries);
    });
  return dfd.promise;
}

function parseFrequencies() {
  var dfd = Q.defer();
  var frequencies = {};
  csv()
    .from.path(FREQUENCY_PATH)
    .on('data', function (row) {
      var args;
      // remove newlines
      args = row.replace(/^\s+|\s+$/g, '').split(',');
      frequencies[args[0]] = parseInt(args[1], 10);
    })
    .on('end', function () {
      dfd.resolve(frequencies);
    });
  return dfd.promise;
}

module.exports = {
  getQueries: parseQueries,
  getFrequencies: parseFrequencies
};
