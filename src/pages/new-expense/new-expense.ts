import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ExpenseService} from "../../services/expense.services";

/**
 * Generated class for the NewExpensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-expense',
  templateUrl: 'new-expense.html',
})
export class NewExpensePage {

  constructor(public navCtrl: NavController, public navParams: NavParams , private expenseService : ExpenseService){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewExpensePage');
  }

  onAddExpense(value: {title : string, amount: number}) {
    this.expenseService.addExpense(value);
    this.navCtrl.pop();

  }
}
