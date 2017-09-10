import {Component} from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';

/*
 Generated class for the FiltersPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/filters/filters.html',
})
export class FiltersPage {
  static get parameters() {
    return [[ViewController]];
  }

  constructor(viewCtrl) {
    this.viewCtrl = viewCtrl;

    this.sorts = [
      {
        id: 1,
        icon: "ios-pin-outline",
        name: "Distance",
        active: "active",
        sortDirection: false,
        sortAsc: false
      },
      {
        id: 2,
        icon: "star-outline",
        name: "Rating",
        active: "",
        sortDirection: true,
        sortAsc: false
      },
      {
        id: 3,
        icon: "logo-usd",
        name: "Cost",
        active: "",
        sortDirection: true,
        sortAsc: true
      },
      {
        id: 4,
        icon: "md-heart-outline",
        name: "Popularity",
        active: "",
        sortDirection: false,
        sortAsc: false
      }
    ]
  }

  // choose sort by...
  chooseSort(sort) {
    // if this sort already active
    if (sort.active === 'active') {
      // toggle sort direction
      sort.sortAsc = !sort.sortAsc
    } else {
      for (var i = 0; i < this.sorts.length; i++) {
        if (this.sorts[i].id == sort.id) {
          this.sorts[i].active = 'active';
        } else {
          this.sorts[i].active = '';
        }
      }
    }
  }

  // hide modal
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
