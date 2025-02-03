var TodoList = /** @class */ (function () {
    function TodoList() {
        this.tasks = [];
        this.nextId = 1;
    }
    TodoList.prototype.addTask = function (description) {
        var newTask = {
            id: this.nextId++,
            description: description,
            completed: false,
        };
        this.tasks.push(newTask);
        console.log("Task added:", newTask);
    };
    TodoList.prototype.removeTask = function (taskId) {
        this.tasks = this.tasks.filter(function (task) { return task.id !== taskId; });
        console.log("Task ".concat(taskId, " removed."));
    };
    TodoList.prototype.markCompleted = function (taskId) {
        this.tasks.map(function (task) {
            if (task.id === taskId) {
                task.completed = true;
                console.log("Task ".concat(taskId, " marked as complete."));
            }
        });
    };
    TodoList.prototype.listTasks = function () {
        console.log("Current Tasks:", this.tasks);
    };
    return TodoList;
}());
var todoList = new TodoList();
todoList.addTask("Learn Angular");
todoList.addTask("Review JS");
todoList.addTask("Review TS");
todoList.markCompleted(2);
todoList.listTasks();
