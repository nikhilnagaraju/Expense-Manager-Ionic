import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NewExpensePage} from "../new-expense/new-expense";
import {ExpenseService} from "../../services/expense.services";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  expenses: {title: string, amount: number}[] = [];
  constructor(public navCtrl: NavController, private expenseService : ExpenseService) {

  }

  ionViewWillEnter(){
    this.expenses = this.expenseService.getExpenses();
  }

  onClickNewExpense(){
    this.navCtrl.push(NewExpensePage);
  }

}
