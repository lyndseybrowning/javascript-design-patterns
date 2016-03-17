class Task {
  constructor(name) {
    this.name = name;
    this.completed = false;
  };

  complete() {
    console.log(`Completing Task: ${this.name}`);
    this.completed = true;
  };

  save() {
    console.log(`Saving Task: ${this.name}`);
  };
};

let task = new Task(`Create a demo for constructors`);
let task2 = new Task(`Create a demo for modules`);

console.log(task.completed); // false
task.complete();
console.log(task.completed); // true

task.save();
task2.save();
