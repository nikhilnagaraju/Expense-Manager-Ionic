import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NewExpensePage} from "../new-expense/new-expense";
import { AuthProvider } from '../../providers/auth/auth';
import { Dialogs } from '@ionic-native/dialogs';

import { FirestoreProvider } from '../../providers/firestore/firestore';
import { Observable } from 'rxjs/Observable';
import {Expense} from "../../models/expense.interface";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userProfile: any = null;
  public expenseList: Observable<Expense[]>;

  goToProfile():void {
    this.navCtrl.push('ProfilePage');
  }

  constructor(public navCtrl: NavController, public authProvider: AuthProvider, public firestoreProvider: FirestoreProvider, private dialogs: Dialogs) {

  }

  ionViewWillEnter(){
    let simple = JSON.parse(JSON.stringify(this.authProvider.getUser()));
    console.log('uid of user in home : '+simple["uid"]);
  }

  ionViewDidLoad() {
    let simple = JSON.parse(JSON.stringify(this.authProvider.getUser()));
    this.expenseList = this.firestoreProvider.getExpenseList(simple["uid"]).valueChanges();
  }

  onClickNewExpense(){
    this.navCtrl.push(NewExpensePage);
  }

  showexpense(expenseparam: Expense): void{
    this.navCtrl.push('DetailPage', { expenseparam});
    console.log(' title ' + expenseparam.title + ' amount ' + expenseparam.amount  + ' id ' + expenseparam.id);
  }

}
