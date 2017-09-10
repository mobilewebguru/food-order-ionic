import {NavController} from 'ionic-angular';
import {Component} from '@angular/core';
/*
 Generated class for the AddReviewPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/add-review/add-review.html',
})
export class AddReviewPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }
}
