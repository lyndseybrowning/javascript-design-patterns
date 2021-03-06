'use strict';

// the flyweight pattern should only be used for a large number of objects.
// it is the act of sharing across objects

var Task = function Task(data) {
    this.flyweight = FlyweightFactory.get(data.project, data.priority, data.user, data.completed);
    this.name = data.name; // unique, everything else can become part of a flyweight
    // this.priority = data.priority;
    // this.project = data.project;
    // this.user = data.user;
    // this.completed = data.completed;
};

Task.prototype.getPriority = function () {
    this.flyweight.priority;
};

function Flyweight(project, priority, user, completed) {
    this.priority = priority;
    this.project = project;
    this.user = user;
    this.completed = completed;
};

var FlyweightFactory = function () {
    var flyweights = {};

    var get = function get(project, priority, user, completed) {
        if (!flyweights[project + priority + user + completed]) {
            flyweights[project + priority + user + completed] = new Flyweight(project, priority, user, completed);
        }
        return flyweights[project + priority + user + completed];
    };

    var getCount = function getCount() {
        var count = 0;
        for (var f in flyweights) {
            count++;
        }return count;
    };

    return {
        get: get,
        getCount: getCount
    };
}();

function TaskCollection() {
    var tasks = {};
    var count = 0;

    var add = function add(data) {
        tasks[data.name] = new Task(data);
        count++;
    };

    var get = function get(name) {
        return tasks[name];
    };

    var getCount = function getCount() {
        return count;
    };

    return {
        add: add,
        get: get,
        getCount: getCount
    };
}

var tasks = new TaskCollection();

var projects = ['none', 'courses', 'training', 'project'];
var priorities = [1, 2, 3, 4, 5];
var users = ['Jon', 'Erica', 'Amanda', 'Nathan'];
var completed = [true, false];

var initialMemory = process.memoryUsage().heapUsed;

for (var i = 0; i < 100000; i++) {
    tasks.add({
        name: 'task' + i,
        priority: priorities[Math.floor(Math.random() * 5)],
        project: projects[Math.floor(Math.random() * 4)],
        user: users[Math.floor(Math.random() * 4)],
        completed: completed[Math.floor(Math.random() * 2)]
    });
};

var afterMemory = process.memoryUsage().heapUsed;
console.log('used memory (MB)', (afterMemory - initialMemory) / 1000000);
console.log('tasks: ', tasks.getCount());
console.log("flyweights: " + FlyweightFactory.getCount());