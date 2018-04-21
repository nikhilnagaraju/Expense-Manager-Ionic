import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Expense } from '../../models/expense.interface';
import {AngularFirestoreCollection} from "angularfire2/firestore";

/*
  Generated class for the FirestoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirestoreProvider {

  constructor(public firestore: AngularFirestore) {
    console.log('Hello FirestoreProvider Provider');
  }

  createExpense(
    title: string,
    amount: number,
    collectionName: string
  ): Promise<void> {
    //create a random ID fr document
    const id = this.firestore.createId();

    //operate on firestore collection with UserID as collectionName
    return this.firestore.doc(`${collectionName}/${id}`).set({
      id,
      title,
      amount,
    });
  }

  //get all documents in collection (userid) and map each to expense model
  getExpenseList(collectionName : string): AngularFirestoreCollection<Expense> {
    return this.firestore.collection(`${collectionName}`);
  }

  //delete a expense based on documentid
  deleteExpense(documentId: string, collectionName: string): Promise<void> {
    return this.firestore.doc(`${collectionName}/${documentId}`).delete();
  }
}



