'use strict';

var _task = require('./task');

var _task2 = _interopRequireDefault(_task);

var _repoFactory = require('./repoFactory2.js');

var _repoFactory2 = _interopRequireDefault(_repoFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var task1 = new _task2.default(_repoFactory2.default.task.get(1));
var task2 = new _task2.default(_repoFactory2.default.task.get(2));

var user = _repoFactory2.default.user.get(1);
var project = _repoFactory2.default.project.get(1);

task1.user = user;
task1.project = project;
task1.save();