"use strict";

require("core-js/modules/esnext.string.replace-all");

// polyfill 示例 String.replaceAll
// require('core-js/proposals/string-replace-all')
console.log('A tiny tiny tiger'.replaceAll('tiny', 'small')); // 'A small small tiger'
// syntax示例 do语句提案

function f() {
  console.log('f');
  return 2;
}

let x = function () {
  console.log('do x 运行了');
  let t = f();
  return t * t + 1;
}();

console.log('x', x);
