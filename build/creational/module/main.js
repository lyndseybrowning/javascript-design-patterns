'use strict';

var _task = require('./task');

var _task2 = _interopRequireDefault(_task);

var _taskRepository = require('./taskRepository');

var _taskRepository2 = _interopRequireDefault(_taskRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var task1 = new _task2.default(_taskRepository2.default.get(1));
var task2 = new _task2.default({
  name: 'Task 2'
});

task1.complete();
task1.save();
task2.save();