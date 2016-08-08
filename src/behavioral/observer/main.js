import Task from './task';

// create and save a task
let task1 = new Task({
  name: 'create demo for constructors',
  user: 'Lyndsey'
});

task1.save();
