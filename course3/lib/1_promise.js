"use strict";

function createPromise() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ms = _ref.ms,
      ms = _ref$ms === void 0 ? 1000 : _ref$ms,
      _ref$isReject = _ref.isReject,
      isReject = _ref$isReject === void 0 ? false : _ref$isReject,
      val = _ref.val;

  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      (isReject ? reject : resolve)(val);
    }, ms);
  });
}

createPromise({
  val: 'My name is guoguo'
}).then(console.log);