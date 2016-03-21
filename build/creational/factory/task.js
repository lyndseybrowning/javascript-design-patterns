'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taskRepository = require('./taskRepository');

var _taskRepository2 = _interopRequireDefault(_taskRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Task = function Task(data) {
  this.name = data.name;
  this.completed = false;
};

// doesn't exist in every copy of Task
Task.prototype.complete = function () {
  console.log('Completing Task: ' + this.name);
  this.completed = true;
};

Task.prototype.save = function () {
  console.log('Saving Task: ' + this.name);
  _taskRepository2.default.save(this);
};

exports.default = Task;