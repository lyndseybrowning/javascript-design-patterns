'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Repo = require('./Repo');

var _Repo2 = _interopRequireDefault(_Repo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var taskHandler = function taskHandler() {
  return {
    save: function save() {
      _Repo2.default.save('Hi from taskHandler');
    }
  };
};

exports.default = taskHandler();