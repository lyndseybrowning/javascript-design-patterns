import Task from './task';
import Repo from './taskRepository';

let task1 = new Task(Repo.get(1));
let task2 = new Task({
  name: 'Task 2'
});

task1.complete();
task1.save();
task2.save();
