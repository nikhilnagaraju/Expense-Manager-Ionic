import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {NewExpensePage} from "../pages/new-expense/new-expense";
import {ExpenseService} from "../services/expense.services";
import {AngularFireModule} from "angularfire2";

export const firebaseConfig = {
  apiKey: "AIzaSyAV0pXv7j4Mhd32W5-yk27IFEvr_4AghyI",
  authDomain: "expense-manager-f7ab1.firebaseapp.com",
  databaseURL: "https://expense-manager-f7ab1.firebaseio.com",
  projectId: "expense-manager-f7ab1",
  storageBucket: "expense-manager-f7ab1.appspot.com",
  messagingSenderId: "97639711298"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewExpensePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewExpensePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ExpenseService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
