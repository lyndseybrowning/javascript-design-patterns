'use strict';

var Task = function Task(data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
};

var TaskService = function () {
    return {
        complete: function complete(task) {
            task.completed = true;
            console.log('completing task: ' + task.name);
        },
        setCompleteDate: function setCompleteDate(task) {
            task.completedDate = new Date();
            console.log(task.name + ' completed on ' + task.completedDate);
        },
        notifyCompletion: function notifyCompletion(task, user) {
            console.log('Notifying ' + user + ' of the completion of ' + task.name);
        },
        save: function save(task) {
            console.log('saving Task: ' + task.name);
        }
    };
}();

// facade
// hides the complicated functionality of TaskServiceWrapper
// and creates a better interface
var TaskServiceWrapper = function () {
    var completeAndNotify = function completeAndNotify(task) {
        TaskService.complete(task);

        if (task.completed == true) {
            TaskService.setCompleteDate(task);
            TaskService.notifyCompletion(task, task.user);
            TaskService.save(task);
        }
    };
    return { completeAndNotify: completeAndNotify };
}();

var myTask = new Task({
    name: 'MyTask',
    priority: 1,
    project: 'Courses',
    user: 'Jon',
    completed: false
});

TaskServiceWrapper.completeAndNotify(myTask);

console.log(myTask);