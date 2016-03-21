'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var repo = function repo() {

  var db = {}; // private

  var get = function get(id) {
    console.log('getting task ' + id);
    return {
      name: 'New task from db'
    };
  };

  var save = function save(task) {
    console.log('saving ' + task.name + ' to the db');
  };

  console.log('newing up task repo');

  return {
    get: get,
    save: save
  };
};

exports.default = repo();