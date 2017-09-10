import {NavController} from 'ionic-angular';
import {Component} from '@angular/core';
import {PlaceService} from '../../services/place-service';
import {SelectLocationPage} from '../select-location/select-location';
import {PlacesPage} from '../places/places';
import {PlaceDetailPage} from '../place-detail/place-detail';
import {SearchPage} from '../search/search';
import {BookmarksPage} from '../bookmarks/bookmarks';
import {MapPage} from '../map/map';
import {NearbyPage} from '../nearby/nearby';

/*
 Generated class for the HomePage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
  static get parameters() {
    return [[NavController], [PlaceService]];
  }

  constructor(nav, placeService) {
    this.nav = nav;
    // current location
    this.currentLocation = 'New York, USA';

    // list slides for slider
    this.slides = [
      {
        src: 'img/bugger.jpg'
      },
      {
        src: 'img/drink.jpg'
      },
      {
        src: 'img/entree.jpg'
      }
    ];

    // list popular places
    this.popularPlaces = placeService.getAll();
  }

  // go to select location page
  selectLocation() {
    this.nav.push(SelectLocationPage);
  }

  // go to places
  viewPlaces() {
    this.nav.rootNav.push(PlacesPage);
  }

  // view a place
  viewPlace(id) {
    this.nav.rootNav.push(PlaceDetailPage, {id: id});
  }

  // go to search page
  goToSearch() {
    this.nav.rootNav.push(SearchPage);
  }

  // go to bookmarks page
  goToBookmarks() {
    this.nav.rootNav.push(BookmarksPage);
  }

  // view map
  goToMap() {
    this.nav.rootNav.push(MapPage);
  }

  // view nearby page
  goToNearBy() {
    this.nav.rootNav.push(NearbyPage);
  }
}