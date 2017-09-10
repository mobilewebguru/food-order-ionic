import {NavController} from 'ionic-angular';
import {Component} from '@angular/core';
import {PlaceService} from '../../services/place-service';
import {BookMarksPage} from '../bookmarks/bookmarks';
import {MenuPage} from '../menu/menu';
import {MapPage} from '../map/map';
import {PhotosPage} from '../photos/photos';
import {ReviewsPage} from '../reviews/reviews';

/*
 Generated class for the PlaceDetailPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/place-detail/place-detail.html',
})
export class PlaceDetailPage {
  static get parameters() {
    return [[NavController], [PlaceService]];
  }

  constructor(nav, placeService) {
    this.nav = nav;

    // get first place for example
    this.place = placeService.getItem(1);

    // get working hours
    this.workingHour = this.getWorkingHours(this.place.working_hours);
  }

  // get working hours in today
  getWorkingHours(hours) {
    var d = new Date();
    var currentDay = {};
    var availableNow = false;

    switch (d.getDay()) {
      case 0:
        currentDay = hours.sunday;
        break;
      case 1:
        currentDay = hours.monday;
        break;
      case 2:
        currentDay = hours.tuesday;
        break;
      case 3:
        currentDay = hours.wednesday;
        break;
      case 4:
        currentDay = hours.thursday;
        break;
      case 5:
        currentDay = hours.friday;
        break;
      case 6:
        currentDay = hours.saturday;
        break;
    }

    availableNow = ((d.getHours() >= currentDay.from) && (d.getHours() <= currentDay.to));

    return {
      available: availableNow,
      from: currentDay.from,
      to: currentDay.to
    }
  }

  // get limit elements for arr
  limitArray(arr, limit) {
    var tmpArr = [];

    for (var i = 0; i < limit; i++) {
      tmpArr.push(arr[i]);
    }

    return tmpArr;
  }

  // add bookmark
  addBookMark(place) {
    place.bookmarked = !place.bookmarked;
  }

  // go to map
  goToMap() {
    this.nav.push(MapPage);
  }

  // to to menu page
  goToMenu() {
    this.nav.push(MenuPage);
  }

  // go to photos
  goToPhotos() {
    this.nav.push(PhotosPage);
  }

  // go to reviews
  goToReviews() {
    this.nav.push(ReviewsPage);
  }
}
