'use strict';

var _calculator = require('./calculator');

var _calculator2 = _interopRequireDefault(_calculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var calc = (0, _calculator2.default)().add(10).add(9).add(1).multiply(100).divide(2).get();

console.log(calc);