import {NavController, Modal} from 'ionic-angular';
import {Component} from '@angular/core';
import {PlaceService} from '../../services/place-service';
import {FiltersPage} from '../filters/filters';
import {PlaceDetailPage} from '../place-detail/place-detail';
import {SearchPage} from '../search/search';

/*
 Generated class for the PlacesPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/places/places.html',
})
export class PlacesPage {
  static get parameters() {
    return [[NavController], [PlaceService]];
  }

  constructor(nav, placeService) {
    this.nav = nav;

    // list of places
    this.places = placeService.getAll();
  }

  // get working hours in today
  getWorkingHours(hours) {
    var d = new Date();
    var currentDay = {};
    var currentWeekDay = {};

    switch (d.getDay()) {
      case 0:
        currentDay = hours.sunday;
        currentWeekDay = 'Sun';
        break;
      case 1:
        currentDay = hours.monday;
        currentWeekDay = 'Mon';
        break;
      case 2:
        currentDay = hours.tuesday;
        currentWeekDay = 'Tue';
        break;
      case 3:
        currentDay = hours.wednesday;
        currentWeekDay = 'Wed';
        break;
      case 4:
        currentDay = hours.thursday;
        currentWeekDay = 'Thu';
        break;
      case 5:
        currentDay = hours.friday;
        currentWeekDay = 'Fri';
        break;
      case 6:
        currentDay = hours.saturday;
        currentWeekDay = 'Sat';
        break;
    }


    return currentWeekDay + ' ' + currentDay.from + 'h to ' + currentDay.to + 'h';
  }

  // get limit elements for arr
  limitArray(arr, limit) {
    var tmpArr = [];

    for (var i = 0; i < limit; i++) {
      tmpArr.push(arr[i]);
    }

    return tmpArr;
  }

  // show filters
  showFilters() {
    let filterModal = Modal.create(FiltersPage);
    this.nav.present(filterModal);
  }

  // view a place
  viewPlace(id) {
    this.nav.push(PlaceDetailPage, {id: id});
  }

  // go to search page
  goToSearch() {
    this.nav.rootNav.push(SearchPage);
  }
}
