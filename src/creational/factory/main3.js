import Task from './task';
import repos from './repoFactory2.js';

const task1 = new Task(repos.task.get(1));
const task2 = new Task(repos.task.get(2));

const user = repos.user.get(1);
const project = repos.project.get(1);

task1.user = user;
task1.project = project;
task1.save();
