import { Component } from '@angular/core';
import {Alert, AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import { Expense } from '../../models/expense.interface';
import {FirestoreProvider} from "../../providers/firestore/firestore";
import {AuthProvider} from "../../providers/auth/auth";
/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  public expense : Expense;


  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private firestoreProvider: FirestoreProvider, public authProvider: AuthProvider ) {
    this.expense = this.navParams.get('expenseparam');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  deleteExpense(docId: string, expenseTitle: string): void {
    const alert: Alert = this.alertCtrl.create({
      message: `Are you sure you want to delete <b>${expenseTitle}</b> from your list?`,
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Clicked Cancel');
          },
        },
        {
          text: 'OK',
          handler: () => {
              this.firestoreProvider.deleteExpense(docId, this.getUserid()).then(() => {
              this.navCtrl.pop();
            });
          },
        },
      ],
    });
    alert.present();
  }

  getUserid() : string{
    let simple = JSON.parse(JSON.stringify(this.authProvider.getUser()));
    return simple["uid"];
  }

}
