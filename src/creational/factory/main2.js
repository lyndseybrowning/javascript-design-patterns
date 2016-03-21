import Task from './task';
import repoFactory from './repoFactory.js';

const task1 = new Task(repoFactory.getRepo('task').get(1));
const user = repoFactory.getRepo('user').get(1);
const project = repoFactory.getRepo('project').get(1);

task1.user = user;
task1.project = project;
task1.save();
