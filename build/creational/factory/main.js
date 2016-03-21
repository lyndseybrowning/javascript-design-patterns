'use strict';

var _task = require('./task');

var _task2 = _interopRequireDefault(_task);

var _taskRepository = require('./taskRepository');

var _taskRepository2 = _interopRequireDefault(_taskRepository);

var _userRepository = require('./userRepository');

var _userRepository2 = _interopRequireDefault(_userRepository);

var _projectRepository = require('./projectRepository');

var _projectRepository2 = _interopRequireDefault(_projectRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var task1 = new _task2.default(_taskRepository2.default.get(1));
var user = _userRepository2.default.get(1);
var project = _projectRepository2.default.get(1);

task1.user = user;
task1.project = project;

console.log(task1);
task1.save();