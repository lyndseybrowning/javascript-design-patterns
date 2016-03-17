var task = {
  title: 'My Task',
  description: 'My Description'
};

Object.defineProperty(task, 'toString', {
  value: function() {
    return this.title + ' ' + this.description;
  },
  writable: false,
  enumerable: false,
  configurable: false
});

// error, cannot redefine property
// configurable is set to false
/*
Object.defineProperty(task, 'toString', {
  enumerable: true
});
*/

task.toString = 'Hi'; // will not overwrite property

var urgentTask = Object.create(task);

Object.defineProperty(urgentTask, 'toString', {
  value: function() {
    return this.title + ' is urgent!';
  },
  writable: false,
  enumerable: false,
  configurable: false
});

console.log(Object.keys(task)); // [title, description]
console.log(urgentTask.toString()); // My task is urgent!
