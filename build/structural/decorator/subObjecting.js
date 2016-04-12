'use strict';

var Task = function Task(name) {
  this.name = name;
  this.completed = false;
};

Task.prototype.complete = function () {
  console.log('Completing Task: ' + this.name);
  this.completed = true;
};

Task.prototype.save = function () {
  console.log('Saving Task: ' + this.name);
};

var myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

// create sub object that wraps task
var UrgentTask = function UrgentTask(name, priority) {
  Task.call(this, name);
  this.priority = priority;
};

// set urgent task prototype to our Task prototype
// so we get access to Task methods such as complete() and save()
UrgentTask.prototype = Object.create(Task.prototype);

UrgentTask.prototype.notify = function () {
  console.log('Notifying important people');
};

UrgentTask.prototype.save = function () {
  console.log('Do special stuff  before saving');
  Task.prototype.save.call(this);
};

var ut = new UrgentTask('This is urgent', 1);
console.log(ut);
ut.complete();
ut.notify();
ut.save();