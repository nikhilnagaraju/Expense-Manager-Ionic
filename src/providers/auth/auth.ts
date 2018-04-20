import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import firebase from 'firebase/app';

@Injectable()
export class AuthProvider {
  constructor(
    public afAuth: AngularFireAuth,
    public googlePlus: GooglePlus,
  ) {}

  getUser(): firebase.User {
    return this.afAuth.auth.currentUser;
  }

  googleLogin(): Promise<any> {
    return this.googlePlus
      .login({
        webClientId: '97639711298-n349nh9a8jn6427q84oih09jtstk48be.apps.googleusercontent.com',
        offline: true
      })
      .then(res => {
        const credential = firebase.auth.GoogleAuthProvider.credential(
          res.idToken
        );
        this.afAuth.auth
          .signInWithCredential(credential)
          .then(success => {
            console.log('Firebase success: ' + JSON.stringify(success));
          })
          .catch(error =>
            console.log('Firebase failure: ' + JSON.stringify(error))
          );
      })
      .catch(err => console.error('Error: ', err));
  }
}
