import {NavController} from 'ionic-angular';
import {Component} from '@angular/core';

/*
 Generated class for the UserPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/user/user.html',
})
export class UserPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
}
