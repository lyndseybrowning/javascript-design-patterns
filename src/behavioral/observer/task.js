const Task = function(data) {
  this.name = data.name;
  this.priority = data.priority;
  this.project = data.project;
  this.user = data.user;
  this.completed = data.completed;
};

Task.prototype.complete = function() {
  console.log(`Completing Task: ${this.name}`);
  this.completed = true;
};

Task.prototype.save = function() {
  console.log(`Saving Task: ${this.name}`);
};

export default Task;
