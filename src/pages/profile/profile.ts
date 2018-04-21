import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  public userProfile: any;
  public userIdinfo: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authProvider: AuthProvider
  ) {}

  // logout(){
  //   this.authProvider.googlelogout();
  // }

  ionViewDidLoad() {
    this.userProfile = this.authProvider.getUser();
    let simple = JSON.parse(JSON.stringify(this.authProvider.getUser()));
    this.userIdinfo = simple["uid"];
  }
}
