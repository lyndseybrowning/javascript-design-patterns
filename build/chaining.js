"use strict";

var Calculator = function Calculator() {
  var sum = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];


  var obj = Object.create(null);

  obj.add = function (n) {
    sum += n;
    return this;
  };

  obj.subtract = function (n) {
    sum -= n;
    return this;
  };

  obj.multiply = function (n) {
    sum *= n;
    return this;
  };

  obj.divide = function (n) {
    sum /= n;
    return this;
  };

  obj.get = function (callback) {
    if (callback) {
      return callback(sum);
    }
    return sum;
  };

  return obj;
};

var calc = Calculator().add(10).add(9).add(1).multiply(100).divide(2).get();

console.log(calc);