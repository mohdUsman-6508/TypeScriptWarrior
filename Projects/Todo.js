"use strict";
class TodoList {
    constructor() {
        this.tasks = [];
        this.nextId = 1;
    }
    addTask(description) {
        const newTask = {
            id: this.nextId++,
            description,
            completed: false,
        };
        this.tasks.push(newTask);
        console.log("Task added:", newTask);
    }
    removeTask(taskId) {
        this.tasks = this.tasks.filter((task) => task.id !== taskId);
        console.log(`Task ${taskId} removed.`);
    }
    markCompleted(taskId) {
        this.tasks.map((task) => {
            if (task.id === taskId) {
                task.completed = true;
                console.log(`Task ${taskId} marked as complete.`);
            }
        });
    }
    listTasks() {
        console.log("Current Tasks:", this.tasks);
    }
}
const todoList = new TodoList();
todoList.addTask("Learn Angular");
todoList.addTask("Review JS");
todoList.addTask("Review TS");
todoList.markCompleted(2);
todoList.listTasks();
