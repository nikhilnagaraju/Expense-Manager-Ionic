import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Expense } from '../../models/expense.interface';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.expense = this.navParams.get('expenseparam');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
