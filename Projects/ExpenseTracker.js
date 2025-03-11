"use strict";
var Category;
(function (Category) {
    Category["Food"] = "Food";
    Category["Travel"] = "Travel";
    Category["Bills"] = "Bills";
    Category["Other"] = "Other";
})(Category || (Category = {}));
class ExpenseTracker {
    constructor() {
        this.expenses = [];
        this.nextId = 1;
    }
    addExpense(description, amount, category) {
        const newExpense = {
            id: this.nextId++,
            description,
            amount,
            category,
            date: new Date(),
        };
        this.expenses.push(newExpense);
        console.log("Expense added:", newExpense);
    }
    removeExpense(expenseId) {
        this.expenses = this.expenses.filter((exp) => exp.id !== expenseId);
        console.log(`Expense ${expenseId} removed.`);
    }
    listExpenses() {
        console.log("Expenses:", this.expenses);
    }
}
const tracker = new ExpenseTracker();
tracker.addExpense("Lunch", 15.5, Category.Food);
tracker.addExpense("Bus Ticket", 2.75, Category.Travel);
tracker.listExpenses();
