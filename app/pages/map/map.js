import {NavController, Platform} from 'ionic-angular';
import {Component} from '@angular/core';

/*
 Generated class for the MapPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/map/map.html',
})
export class MapPage {
  static get parameters() {
    return [[NavController], [Platform]];
  }

  constructor(nav, platform) {
    this.nav = nav;

    this.platform = platform;

    // init map
    this.initializeMap();
  }

  initializeMap() {

    this.platform.ready().then(() => {
      var minZoomLevel = 12;

      this.map = new google.maps.Map(document.getElementById('map_canvas'), {
        zoom: minZoomLevel,
        center: new google.maps.LatLng(38.50, -90.50),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
    });

  }
}
