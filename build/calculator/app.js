'use strict';

var _chaining = require('./chaining');

var _chaining2 = _interopRequireDefault(_chaining);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var calc = (0, _chaining2.default)().add(10).add(9).add(1).multiply(100).divide(2).get();

console.log(calc);