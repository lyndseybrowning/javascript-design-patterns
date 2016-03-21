"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
  function Task(name) {
    _classCallCheck(this, Task);

    this.name = name;
    this.completed = false;
  }

  _createClass(Task, [{
    key: "complete",
    value: function complete() {
      console.log("Completing Task: " + this.name);
      this.completed = true;
    }
  }, {
    key: "save",
    value: function save() {
      console.log("Saving Task: " + this.name);
    }
  }]);

  return Task;
}();

;

var task = new Task("Create a demo for constructors");
var task2 = new Task("Create a demo for modules");

console.log(task.completed); // false
task.complete();
console.log(task.completed); // true

task.save();
task2.save();