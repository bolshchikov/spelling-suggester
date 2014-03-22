/**
 * @name
 * @fileOverview
 * @author sergey
 */

var Q = require('q');

var parser = require('./modules/parser');

(function () {
  Q.all([parser.getQueries(), parser.getFrequencies()]).spread(function (queries, frequencies) {
    console.log(queries);
  });
})();