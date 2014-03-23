/**
 * @name
 * @fileOverview
 * @author sergey
 */

var diff = require('./diff');

var d = new diff.diff_match_patch();
console.log(d.diff_main('vaps', 'tap'));

