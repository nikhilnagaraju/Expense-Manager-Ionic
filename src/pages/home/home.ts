import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NewExpensePage} from "../new-expense/new-expense";
import { AuthProvider } from '../../providers/auth/auth';

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
  totalamount: number =0; //initializing default value for total

  goToProfile():void {
    this.navCtrl.push('ProfilePage');
  }
  //reference authprovider and firestore Database provider
  constructor(public navCtrl: NavController, public authProvider: AuthProvider, public firestoreProvider: FirestoreProvider) {

  }

  ionViewWillEnter(){
  }

  ionViewDidLoad() {
    //get observable for the firestore collection based on userID
    let simple = JSON.parse(JSON.stringify(this.authProvider.getUser()));
    this.expenseList = this.firestoreProvider.getExpenseList(simple["uid"]).valueChanges();
    this.expenseList.subscribe(val => {
      let amountarray: number[] = [];
      val.map((obj) => {
        amountarray.push(obj.amount);
      });
      this.totalamount = amountarray.reduce((a, b) => +a + +b, +0); // prefixing '+' before numbers to sumup
    });
  }

  onClickNewExpense(){
    this.navCtrl.push(NewExpensePage);
  }

  //move to details page with expense obj
  showexpense(expenseparam: Expense): void{
    this.navCtrl.push('DetailPage', { expenseparam});
    console.log(' title ' + expenseparam.title + ' amount ' + expenseparam.amount  + ' id ' + expenseparam.id);
  }

}
