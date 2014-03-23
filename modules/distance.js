/**
 * @name
 * @fileOverview
 * @author sergey
 */

var diff = require('./diff').diff_match_patch;

function calculate (string1, string2) {
  var differ, diff_result;

  if (arguments.length !== 2 || typeof string1 !== 'string' || typeof string2 !== 'string') {
    throw new TypeError('invalid arguments');
  }

  // return the result on the following format
  // [ [ -1, 'v' ], [ 1, 'l' ], [ 0, 'ap' ], [ -1, 's' ] ]
  // where -1: delete, 1: insert, 0: equals
  differ = new diff();
  diff_result = differ.diff_main(string1, string2);
  return differ.diff_levenshtein(diff_result);
}

module.exports = {
  calculate: calculate
};

