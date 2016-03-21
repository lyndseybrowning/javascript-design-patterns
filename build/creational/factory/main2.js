'use strict';

var _task = require('./task');

var _task2 = _interopRequireDefault(_task);

var _repoFactoryCache = require('./repoFactoryCache.js');

var _repoFactoryCache2 = _interopRequireDefault(_repoFactoryCache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var task1 = new _task2.default(_repoFactoryCache2.default.getRepo('task').get(1));
var task2 = new _task2.default(_repoFactoryCache2.default.getRepo('task').get(2));

var user = _repoFactoryCache2.default.getRepo('user').get(1);
var project = _repoFactoryCache2.default.getRepo('project').get(1);

task1.user = user;
task1.project = project;
task1.save();