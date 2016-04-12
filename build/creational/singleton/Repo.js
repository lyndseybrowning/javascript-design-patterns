'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var repo = function repo() {
  var called = 0;
  var save = function save(task) {
    called++;
    console.log('Saving ' + task + ' Called ' + called + ' times');
  };

  console.log('Newing up task repo');

  return { save: save };
};

exports.default = repo;