import {NavController} from 'ionic-angular';
import {Component} from '@angular/core';
import {CollectionService} from '../../services/collection-service';
import {PlacesPage} from '../places/places';

/*
 Generated class for the CollectionsPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/collections/collections.html',
})
export class CollectionsPage {
  static get parameters() {
    return [[NavController], [CollectionService]];
  }

  constructor(nav, collectionService) {
    this.nav = nav;

    // set sample data
    this.collections = collectionService.getAll();
  }

  // add bookmark
  addBookMark(collection) {
    collection.bookmarked = !collection.bookmarked;
  }

  // view a collection
  goToCollection(id) {
    this.nav.rootNav.push(PlacesPage);
  }

}
