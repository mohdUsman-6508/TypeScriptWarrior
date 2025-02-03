"use strict";

interface Task {
  id: number;
  description: string;
  completed: boolean;
}

class TodoList {
  private tasks: Task[] = [];
  private nextId = 1;

  addTask(description: string): void {
    const newTask: Task = {
      id: this.nextId++,
      description,
      completed: false,
    };
    this.tasks.push(newTask);
    console.log("Task added:", newTask);
  }

  removeTask(taskId: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    console.log(`Task ${taskId} removed.`);
  }

  markCompleted(taskId: number): void {
    this.tasks.map((task) => {
      if (task.id === taskId) {
        task.completed = true;
        console.log(`Task ${taskId} marked as complete.`);
      }
    });
  }

  listTasks(): void {
    console.log("Current Tasks:", this.tasks);
  }
}

const todoList = new TodoList();
todoList.addTask("Learn Angular");
todoList.addTask("Review JS");
todoList.addTask("Review TS");

todoList.markCompleted(2);
todoList.listTasks();
