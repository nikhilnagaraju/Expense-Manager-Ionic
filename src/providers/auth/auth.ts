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

  //fetch firebase user
  getUser(): firebase.User {
    return this.afAuth.auth.currentUser;
  }


  //google login
  googleLogin(): Promise<any> {
    return this.googlePlus
      .login({
        //clientID generated from google dev console for expense app (linked with firebase app credentials)
        webClientId: '97639711298-n349nh9a8jn6427q84oih09jtstk48be.apps.googleusercontent.com',
        offline: true
      })
      .then(res => {
        //get IdToken to create a credentials obj
        const credential = firebase.auth.GoogleAuthProvider.credential( res.idToken );
        this.afAuth.auth
          .signInWithCredential(credential) //login with created credentials
          .then(success => {
            console.log('Firebase success: ' + JSON.stringify(success));
          })
          .catch(error =>
            console.log('Firebase failure: ' + JSON.stringify(error))
          );
      })
      .catch(err => console.error('Error: ', err));
  }

  //logout function
  googlelogout(): Promise<void> {
    return this.afAuth.auth.signOut();
  }
}
