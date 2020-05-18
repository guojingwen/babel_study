"use strict";

var _moduleA = require("./moduleA");

console.log('main.js');
(0, _moduleA.say)();

var speak = function speak() {
  console.log('I can speck Chinese');
};

speak();