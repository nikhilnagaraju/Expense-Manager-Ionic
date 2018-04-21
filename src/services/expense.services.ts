export class ExpenseService {
  //simple array to hold expenses
  private expenses: {title: string, amount: number}[] = [];

  //add expenses
  addExpense(individualExpense: {title: string, amount:number}) {
    this.expenses.push(individualExpense);
  }

  //fetch expense array
  getExpenses() {
    return this.expenses.slice();
  }
}
