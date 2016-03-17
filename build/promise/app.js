'use strict';

var _promise = require('./promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var promise = (0, _promise2.default)();

setTimeout(function () {
  promise.resolve();
}, 1000);

setTimeout(function () {
  promise.done(function (data) {
    console.log('Handler added after deferred object is done');
  });
}, 2000);

promise.done(function (data) {
  console.log('Deferred object has completed');
});

var promise2 = (0, _promise2.default)();

promise2.failed(function () {
  console.log('Promise #2 failed');
}).done(function () {
  console.log('Promise #2 completed');
});

setTimeout(function () {
  promise2.fail();
}, 3000);

console.log('application completed');