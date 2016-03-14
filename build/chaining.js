"use strict";

var Calculator = function Calculator() {
  var sum = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];


  var obj = {
    add: function add(n) {
      sum += n;
      return this;
    },
    subtract: function subtract(n) {
      sum -= n;
      return this;
    },
    multiply: function multiply(n) {
      sum *= n;
      return this;
    },
    divide: function divide(n) {
      sum /= n;
      return this;
    },
    get: function get(callback) {
      if (callback) {
        return callback(sum);
      }
      return sum;
    }
  };

  return obj;
};

var calc = Calculator().add(10).add(9).add(1).multiply(100).divide(2).get();

console.log(calc);