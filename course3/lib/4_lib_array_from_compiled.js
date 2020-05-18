"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _from = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/from"));

function log1() {
  return (0, _from["default"])([1]);
}

function log2() {
  return (0, _from["default"])([2]);
}

log1();
log2();

var fn = function fn() {
  console.log('fn');
};

fn();
