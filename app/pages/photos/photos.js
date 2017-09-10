import {NavController} from 'ionic-angular';
import {Component} from '@angular/core';
import {PlaceService} from '../../services/place-service';

/*
 Generated class for the PhotosPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/photos/photos.html',
})
export class PhotosPage {
  static get parameters() {
    return [[NavController], [PlaceService]];
  }

  constructor(nav, placeService) {
    this.nav = nav;

    // get first place for example
    this.place = placeService.getItem(1);
  }
}
