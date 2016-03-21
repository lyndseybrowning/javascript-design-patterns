'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var repo = function repo() {

  var db = {}; // private

  var get = function get(id) {
    console.log('getting project ' + id);
    return {
      name: 'New project'
    };
  };

  var save = function save(project) {
    console.log('saving ' + project.name + ' to the db');
  };

  // revealing module pattern
  return {
    get: get,
    save: save
  };
};

exports.default = repo();