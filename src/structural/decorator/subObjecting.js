const Task = function(name) {
  this.name = name;
  this.completed = false;
};

Task.prototype.complete = function() {
  console.log(`Completing Task: ${this.name}`);
  this.completed = true;
};

Task.prototype.save = function() {
  console.log(`Saving Task: ${this.name}`);
};

let myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

// create sub object that wraps task
const UrgentTask = function(name, priority) {
  Task.call(this, name);
  this.priority = priority;
};

// set urgent task prototype to our Task prototype
// so we get access to Task methods such as complete() and save()
UrgentTask.prototype = Object.create(Task.prototype);

UrgentTask.prototype.notify = function() {
  console.log('Notifying important people');
};

UrgentTask.prototype.save = function() {
  this.notify();
  console.log('Do special stuff  before saving');
  Task.prototype.save.call(this);
};

let ut = new UrgentTask('This is urgent', 1);
console.log(ut);
ut.complete();
ut.save();
