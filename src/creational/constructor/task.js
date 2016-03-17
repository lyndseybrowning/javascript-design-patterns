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

export default Task;
