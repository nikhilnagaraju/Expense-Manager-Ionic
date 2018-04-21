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
import {AngularFirestoreModule} from "angularfire2/firestore";
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { GooglePlus } from '@ionic-native/google-plus';
import { AuthProvider } from '../providers/auth/auth';
import { FirestoreProvider } from '../providers/firestore/firestore';
import { Dialogs } from '@ionic-native/dialogs';


//firebase config credentials for the project
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
    NewExpensePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewExpensePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ExpenseService,
    AuthProvider,  //auth provider for managing authentication
    GooglePlus,
    FirestoreProvider,    //firestore for operating on Firebase Cloud Firestore
    Dialogs,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
