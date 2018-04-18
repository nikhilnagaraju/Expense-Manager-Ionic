import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NewExpensePage} from "../new-expense/new-expense";
import {ExpenseService} from "../../services/expense.services";
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: Observable<any[]>;
  isempty : boolean;

  // expenses: {title: string, amount: number}[] = [];
  // constructor(public navCtrl: NavController, private expenseService : ExpenseService) {
  //
  // }

  constructor(public navCtrl: NavController, afDB: AngularFireDatabase) {
    this.items = afDB.list('examplecoll').valueChanges();
    // this.items.em
  }
  //
  // ionViewWillEnter(){
  //   this.expenses = this.expenseService.getExpenses();
  // }

  onClickNewExpense(){
    this.navCtrl.push(NewExpensePage);
  }

}
