enum Category {
  Food = "Food",
  Travel = "Travel",
  Bills = "Bills",
  Other = "Other",
}

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: Category;
  date: Date;
}

class ExpenseTracker {
  private expenses: Expense[] = [];
  private nextId = 1;

  addExpense(description: string, amount: number, category: Category): void {
    const newExpense: Expense = {
      id: this.nextId++,
      description,
      amount,
      category,
      date: new Date(),
    };
    this.expenses.push(newExpense);
    console.log("Expense added:", newExpense);
  }

  removeExpense(expenseId: number): void {
    this.expenses = this.expenses.filter((exp) => exp.id !== expenseId);
    console.log(`Expense ${expenseId} removed.`);
  }

  listExpenses(): void {
    console.log("Expenses:", this.expenses);
  }
}

const tracker = new ExpenseTracker();
tracker.addExpense("Lunch", 15.5, Category.Food);
tracker.addExpense("Bus Ticket", 2.75, Category.Travel);
tracker.listExpenses();
