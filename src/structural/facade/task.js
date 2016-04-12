const Task = function (data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
};

const TaskService = (function() {
    return {
        complete(task) {
            task.completed = true;
            console.log(`completing task: ${task.name}`);
        },
        setCompleteDate(task) {
            task.completedDate = new Date();
            console.log(`${task.name} completed on ${task.completedDate}`);
        },
        notifyCompletion(task, user) {
            console.log(`Notifying ${user} of the completion of ${task.name}`);
        },
        save(task) {
            console.log(`saving Task: ${task.name}`);
        }
    }
})();

const TaskServiceWrapper = (function() {
    let completeAndNotify = (task) => {
        TaskService.complete(task);

        if (task.completed == true) {
            TaskService.setCompleteDate(task);
            TaskService.notifyCompletion(task, task.user);
            TaskService.save(task);
        }
    }
    return { completeAndNotify }
})();

let myTask = new Task({
    name: 'MyTask',
    priority: 1,
    project: 'Courses',
    user: 'Jon',
    completed: false
});
TaskServiceWrapper.completeAndNotify(myTask);

console.log(myTask);
