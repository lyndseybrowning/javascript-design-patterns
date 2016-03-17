import Task from './task';

let task = new Task(`Create a demo for constructors`);
let task2 = new Task(`Create a demo for modules`);

console.log(task.completed); // false
task.complete();
console.log(task.completed); // true

task.save();
task2.save();
