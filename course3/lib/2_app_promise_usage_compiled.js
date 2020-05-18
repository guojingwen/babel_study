"use strict";

require("core-js/modules/es.promise");

function createPromise() {
  let {
    ms = 1000,
    isReject = false,
    val
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      (isReject ? reject : resolve)(val);
    }, ms);
  });
}

createPromise({
  val: 'My name is guoguo'
}).then(console.log);
