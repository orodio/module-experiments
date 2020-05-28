const { makeTag } = require("@qvvg/test-make-tag");
const { isTag } = require("@qvvg/test-is-tag");

const TAG = "WOOT";

exports.TAG = TAG;

exports.make = function make(obj) {
  return makeTag(TAG, obj);
};

exports.is = function is(obj) {
  return isTag(TAG, obj);
};
