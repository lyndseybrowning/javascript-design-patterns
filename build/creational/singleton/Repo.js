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

// by calling the function at export,
// we create a singleton and only one instance of the
// repo exists due to caching of the module
exports.default = repo();