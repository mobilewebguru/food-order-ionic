import {NavController} from 'ionic-angular';
import {Component} from '@angular/core';
import {HomePage} from '../home/home';
import {CollectionsPage} from '../collections/collections';
import {FeedPage}from '../feed/feed';
import {AccountPage} from '../account/account';

/*
 Generated class for the MainTabsPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/main-tabs/main-tabs.html',
})
export class MainTabsPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
    this.tabHome = HomePage;
    this.tabCollections = CollectionsPage;
    this.tabFeed = FeedPage;
    this.tabAccount = AccountPage;
  }
}
