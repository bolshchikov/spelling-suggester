/**
 * @name
 * @fileOverview
 * @author sergey
 */

var Q = require('q'),
    parser = require('./modules/parser');

var QUERIES_PATH = './input/misspelled_queries.csv';
var FREQUENCY_PATH = './input/word_frequency.csv';

(function () {
  Q.all([parser.getQueries(QUERIES_PATH), parser.getFrequencies(FREQUENCY_PATH)])
    .spread(function (queries, frequencies) {
      console.log(frequencies);
    });
})();