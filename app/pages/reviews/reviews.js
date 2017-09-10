import {NavController} from 'ionic-angular';
import {Component} from '@angular/core';
import {ReviewService} from '../../services/review-service';

/*
 Generated class for the ReviewsPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/reviews/reviews.html',
})
export class ReviewsPage {
  static get parameters() {
    return [[NavController], [ReviewService]];
  }

  constructor(nav, reviewService) {
    this.nav = nav;

    // feed
    this.reviews = reviewService.getAll();
  }
}
