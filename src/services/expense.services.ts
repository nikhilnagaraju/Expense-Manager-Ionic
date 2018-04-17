export class ExpenseService {
  private expenses: {title: string, amount: number}[] = [];

  addExpense(individualExpense: {title: string, amount:number}) {
    this.expenses.push(individualExpense);
  }

  getExpenses() {
    return this.expenses.slice();
  }
}
