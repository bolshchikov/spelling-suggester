/**
 * @name
 * @fileOverview
 * @author sergey
 */

var csv = require('csv'),
    Q = require('q');



function parseQueries(path) {
  var dfd = Q.defer();
  var queries = [];
  csv()
    .from.path(path)
    .on('data', function (row) {
      // with removed newlines
      queries.push(row.replace(/^\s+|\s+$/g, ''));
    })
    .on('end', function () {
      dfd.resolve(queries);
    });
  return dfd.promise;
}

function parseFrequencies(path) {
  var dfd = Q.defer();
  var frequencies = {};
  csv()
    .from.path(path)
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
