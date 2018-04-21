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
    const id = this.firestore.createId();

    return this.firestore.doc(`${collectionName}/${id}`).set({
      id,
      title,
      amount,
    });
  }

  getExpenseList(collectionName : string): AngularFirestoreCollection<Expense> {
    return this.firestore.collection(`${collectionName}`);
  }

  deleteExpense(documentId: string, collectionName: string): Promise<void> {
    return this.firestore.doc(`${collectionName}/${documentId}`).delete();
  }
}



