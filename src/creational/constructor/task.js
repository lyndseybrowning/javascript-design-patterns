const Task = function(name) {
  this.name = name;
  this.completed = false;
};

// doesn't exist in every copy of Task
Task.prototype.complete = function() {
  console.log(`Completing Task: ${this.name}`);
  this.completed = true;
};

Task.prototype.save = function() {
  console.log(`Saving Task: ${this.name}`);
};

let task = new Task(`Create a demo for constructors`);
let task2 = new Task(`Create a demo for modules`);

console.log(task.completed); // false
task.complete();
console.log(task.completed); // true

task.save();
task2.save();
