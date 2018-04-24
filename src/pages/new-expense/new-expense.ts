import { Component } from '@angular/core';
import {IonicPage, NavController, Loading, LoadingController, AlertController, Alert, NavParams,} from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FirestoreProvider } from '../../providers/firestore/firestore';
import {AuthProvider} from "../../providers/auth/auth";

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

  //formgroup obj for taking inputs
  public addExpenseForm: FormGroup;
  public userIdinfo: string;
  private expenseType;

  constructor( public navCtrl: NavController,
               public navParams: NavParams ,
               public loadingCtrl: LoadingController,
               public alertCtrl: AlertController,
               public firestoreProvider: FirestoreProvider,
               public authProvider: AuthProvider,
               formBuilder: FormBuilder
    ) {
    //form inputs validations
    this.addExpenseForm = formBuilder.group({
      expenseTitle: ['', Validators.required],
      expenseAmount: ['', Validators.required],
    });
    this.expenseType= false;
    let simple = JSON.parse(JSON.stringify(this.authProvider.getUser()));
    this.userIdinfo = simple["uid"];
  }

  //add an expense to Cloud firestore db with
  addExpense(): void {

    const loading: Loading = this.loadingCtrl.create();
    loading.present();//show simple loader
    const title = this.addExpenseForm.value.expenseTitle;
    const amount = this.addExpenseForm.value.expenseAmount;

    this.firestoreProvider
      .createExpense(title, amount, this.expenseType, this.userIdinfo)
      .then(
        () => {
          //on promise resolved hide loader
          loading.dismiss().then(() => {
            // on promise resolved, pop/goto to home page
            this.navCtrl.pop();
          });
        },
        error => {
          loading.dismiss().then(() => { //handle error with alert
            const alert: Alert = this.alertCtrl.create({
              message: error.message,
              buttons: [{ text: 'Ok', role: 'cancel' }],
            });
            alert.present();
          });
        }
      );

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewExpensePage');
  }
}
