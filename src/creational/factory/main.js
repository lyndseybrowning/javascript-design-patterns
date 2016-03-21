import Task from './task';
import taskRepo from './taskRepository';
import userRepo from './userRepository';
import projectRepo from './projectRepository';

const task1 = new Task(taskRepo.get(1));
const user = userRepo.get(1);
const project = projectRepo.get(1);

task1.user = user;
task1.project = project;

console.log(task1);
task1.save();
