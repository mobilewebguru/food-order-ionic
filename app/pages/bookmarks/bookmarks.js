import {NavController} from 'ionic-angular';
import {Component} from '@angular/core';
import {PlaceService} from '../../services/place-service';
import {PlaceDetailPage} from '../place-detail/place-detail';

/*
 Generated class for the BookmarksPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/bookmarks/bookmarks.html',
})
export class BookmarksPage {
  static get parameters() {
    return [[NavController], [PlaceService]];
  }

  constructor(nav, placeService) {
    this.nav = nav;

    // list of places
    this.places = placeService.getAll();
  }

  // view a place
  viewPlace(id) {
    this.nav.push(PlaceDetailPage, {id: id});
  }
}
