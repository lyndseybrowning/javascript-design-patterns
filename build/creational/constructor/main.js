'use strict';

var _task = require('./task');

var _task2 = _interopRequireDefault(_task);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var task = new _task2.default('Create a demo for constructors');
var task2 = new _task2.default('Create a demo for modules');

console.log(task.completed); // false
task.complete();
console.log(task.completed); // true

task.save();
task2.save();