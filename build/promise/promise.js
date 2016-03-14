'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Promise = function Promise() {
  var completed = [];
  var _failed = [];
  var status = 'progress';
  var data = null;

  var promise = {
    done: function done(fn) {
      completed.push(fn);

      if (status === 'done') {
        fn(data);
      }

      return this;
    },
    failed: function failed(fn) {
      _failed.push(fn);

      if (status === 'failed') {
        fn(data);
      }

      return this;
    },
    resolve: function resolve(result) {
      if (status !== 'progress') {
        throw 'Promise has already completed with a status of ' + status;
      }

      status = 'done';
      data = result;

      completed.forEach(function (fn) {
        fn(data);
      });
    },
    fail: function fail(reason) {
      if (status !== 'progress') {
        throw 'Promise has already completed with a status of ' + status;
      }

      status = 'failed';
      data = reason;

      _failed.forEach(function (fn) {
        fn(data);
      });

      return this;
    }
  };

  return promise;
};

exports.default = Promise;