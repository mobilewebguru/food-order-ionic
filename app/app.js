import {ionicBootstrap, Platform, App} from 'ionic-angular';
import {Component, ViewChild} from '@angular/core';
import {StatusBar} from 'ionic-native';

import {FIREBASE_PROVIDERS, defaultFirebase} from "angularfire2";

// import services
import {PlaceService} from './services/place-service';
import {CollectionService} from './services/collection-service';
import {ReviewService} from './services/review-service';

// import pages
import {LoginPage} from './pages/login/login';
import {SignUpPage} from './pages/sign-up/sign-up';
import {ForgotPasswordPage} from './pages/forgot-password/forgot-password';
import {HomePage} from './pages/home/home';
import {MainTabsPage} from './pages/main-tabs/main-tabs';
import {PlacesPage} from './pages/places/places';
import {PlaceDetailPage} from './pages/place-detail/place-detail';
import {SelectLocationPage} from './pages/select-location/select-location';
import {SearchPage} from './pages/search/search';
import {AccountPage} from './pages/account/account';
import {CollectionsPage} from './pages/collections/collections';
import {FeedPage} from './pages/feed/feed';
import {MapPage} from './pages/map/map';
import {NearbyPage} from './pages/nearby/nearby';
import {BookmarksPage} from './pages/bookmarks/bookmarks';
import {MenuPage} from './pages/menu/menu';
import {ReviewsPage} from './pages/reviews/reviews';
import {PhotosPage} from './pages/photos/photos';
import {AddBottlePage} from './pages/add-bottle/add-bottle';
@
Component({
    templateUrl: 'build/app.html',
    queries: {
        nav: new ViewChild('content')
    }
})
export class MyApp {
    static get parameters() {
        return [[App], [Platform]];
    }

    constructor(app, platform) {
        this.pages = [
            {title: "Map", component: MapPage},
            {title: "Add a Bottle", component: AddBottlePage}
        ];
        console.log(app);
        this.app = app;
        this.rootPage = LoginPage;

        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });
    }

    openPage(page) {
        console.log(page);
        // Reset the content nav to have just this page
        // we wouldn"t want the back button to show in this scenario

        this.nav.setRoot(page.component);
    }
}

// Pass the main app component as the first argument
// Pass any providers for your app in the second argument
// Set any config for your app as the third argument:
// http://ionicframework.com/docs/v2/api/config/Config/

ionicBootstrap(MyApp, [PlaceService, CollectionService, ReviewService,
        FIREBASE_PROVIDERS, defaultFirebase({
            apiKey: "AIzaSyBSFAEEQbmBRDBNsl94mGtIOg1HolUsTd4",
            authDomain: "ionic2-store-app.firebaseapp.com",
            databaseURL: "https://ionic2-store-app.firebaseio.com",
            storageBucket: "ionic2-store-app.appspot.com",
        })],
    {
        platforms: {
            android: {
                tabbarLayout: 'title-hide'
            },
            windows: {
                tabbarLayout: 'title-hide'
            }
        }
    })
