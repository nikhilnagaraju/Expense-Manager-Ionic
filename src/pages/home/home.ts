import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NewExpensePage} from "../new-expense/new-expense";
import {ExpenseService} from "../../services/expense.services";
import { AuthProvider } from './../../providers/auth/auth';
import { GooglePlus } from '@ionic-native/google-plus';
import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userProfile: any = null;

  goToProfile():void {
    this.navCtrl.push('ProfilePage');
  }

  expenses: {title: string, amount: number}[] = [];
  constructor(public navCtrl: NavController, private expenseService : ExpenseService, public authProvider: AuthProvider) {

  }

  ionViewWillEnter(){
    this.expenses = this.expenseService.getExpenses();
    let simple = JSON.parse(JSON.stringify(this.authProvider.getUser()));
    console.log('uid of user in home : '+simple["uid"]);
  }

  onClickNewExpense(){
    this.navCtrl.push(NewExpensePage);
  }

}
