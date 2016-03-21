'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var repo = function repo() {

  var db = {}; // private

  var get = function get(id) {
    console.log('getting user ' + id);
    return {
      name: 'Jon Mills'
    };
  };

  var save = function save(user) {
    console.log('saving ' + user.name + ' to the db');
  };

  // revealing module pattern
  return {
    get: get,
    save: save
  };
};

exports.default = repo();