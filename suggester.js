/**
 * @name
 * @fileOverview
 * @author sergey
 */

var fs = require('fs'),
    Q = require('q'),
    parser = require('./modules/parser'),
    distance = require('./modules/distance');

var QUERIES_PATH = './input/misspelled_queries.csv';
var FREQUENCY_PATH = './input/word_frequency.csv';

(function () {

  Q.all([parser.getQueries(QUERIES_PATH), parser.getFrequencies(FREQUENCY_PATH)])
    .spread(function (queries, frequencies) {
      var res = {}, freq_keys = Object.keys(frequencies);
      for (var i = 0, leni = queries.length; i < leni; i += 1) {
        for (var j = 0, lenj = freq_keys.length; j < lenj; j += 1) {
          var dist = distance.calculate(queries[i], freq_keys[j]);
          if (dist === 1 || dist === 2) {
            if (res[queries[i]] === void 0) {
              res[queries[i]] = [freq_keys[j]];
            }
            else {
              res[queries[i]].push(freq_keys[j]);
            }
          }
        }
      }
      return res;
    })
    .done(function (result) {
      var suggestions;
      suggestions = fs.createWriteStream('suggestions.txt');
      suggestions.once('open', function () {
        var key, str;
        for (key in result) {
          if (result.hasOwnProperty(key)) {
            str = "* " + key + ": ['" + result[key].join("', '") + "']\n";
            suggestions.write(str);
          }
        }
        suggestions.end();
      });
    });
})();