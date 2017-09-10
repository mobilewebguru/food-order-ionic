import {NavController} from 'ionic-angular';
import {Component} from '@angular/core';
import {PlaceService} from '../../services/place-service';

/*
 Generated class for the MenuPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/menu/menu.html',
})
export class MenuPage {
  static get parameters() {
    return [[NavController], [PlaceService]];
  }

  constructor(nav, placeService) {
    this.nav = nav;

    // get first place for example
    this.place = placeService.getItem(1);
  }
}
