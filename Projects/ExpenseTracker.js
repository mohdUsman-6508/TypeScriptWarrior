var Category;
(function (Category) {
    Category["Food"] = "Food";
    Category["Travel"] = "Travel";
    Category["Bills"] = "Bills";
    Category["Other"] = "Other";
})(Category || (Category = {}));
var ExpenseTracker = /** @class */ (function () {
    function ExpenseTracker() {
        this.expenses = [];
        this.nextId = 1;
    }
    ExpenseTracker.prototype.addExpense = function (description, amount, category) {
        var newExpense = {
            id: this.nextId++,
            description: description,
            amount: amount,
            category: category,
            date: new Date(),
        };
        this.expenses.push(newExpense);
        console.log("Expense added:", newExpense);
    };
    ExpenseTracker.prototype.removeExpense = function (expenseId) {
        this.expenses = this.expenses.filter(function (exp) { return exp.id !== expenseId; });
        console.log("Expense ".concat(expenseId, " removed."));
    };
    ExpenseTracker.prototype.listExpenses = function () {
        console.log("Expenses:", this.expenses);
    };
    return ExpenseTracker;
}());
var tracker = new ExpenseTracker();
tracker.addExpense("Lunch", 15.5, Category.Food);
tracker.addExpense("Bus Ticket", 2.75, Category.Travel);
tracker.listExpenses();
