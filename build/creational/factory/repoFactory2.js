'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taskRepository = require('./taskRepository');

var _taskRepository2 = _interopRequireDefault(_taskRepository);

var _userRepository = require('./userRepository');

var _userRepository2 = _interopRequireDefault(_userRepository);

var _projectRepository = require('./projectRepository');

var _projectRepository2 = _interopRequireDefault(_projectRepository);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var repoFactory = function repoFactory() {
  return {
    task: _taskRepository2.default,
    user: _userRepository2.default,
    project: _projectRepository2.default
  };
};

exports.default = repoFactory();