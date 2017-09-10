import {NavController} from 'ionic-angular';
import {Component} from '@angular/core';
import {ReviewService} from '../../services/review-service';
import {PlaceDetailPage} from '../place-detail/place-detail';

/*
 Generated class for the FeedPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/feed/feed.html',
})
export class FeedPage {
  static get parameters() {
    return [[NavController], [ReviewService]];
  }

  constructor(nav, reviewService) {
    this.nav = nav;

    // feed
    this.reviews = reviewService.getAll();
  }

  // view a place
  viewPlace(id) {
    this.nav.push(PlaceDetailPage, {id: id});
  }
}
