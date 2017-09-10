import {NavController, Loading} from 'ionic-angular';
import {Component, Inject} from '@angular/core';
import {ForgotPasswordPage} from '../forgot-password/forgot-password';
import {HomePage} from '../home/home';
import {MainTabsPage} from '../main-tabs/main-tabs';

import {FirebaseAuth, FirebaseRef, AuthProviders, AuthMethods, AngularFire} from "angularfire2";

/*
 Generated class for the SignUpPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  templateUrl: 'build/pages/sign-up/sign-up.html',
})
export class SignUpPage {
  static get parameters() {
    return [[FirebaseAuth], [NavController]];
  }

  constructor(auth, nav) {
    this.nav = nav;
    this.auth = auth;
  }

  // go to forgot password page
  forgotPwd() {
    this.nav.push(ForgotPasswordPage);
  }

  // process sign up
  signUp() {
    // add our sign up code here
    this.nav.push(MainTabsPage);
  }

  registerUser(credentials) {
    let loading = Loading.create({
      content: "Por favor aguarde..."
    });
    this.nav.present(loading);

    this.auth.createUser(credentials).then((authData) => {
      console.log(authData);
      credentials.created = true;
      return this.login(credentials, loading);
    }).catch((error) => {
      loading.dismiss();
    if (error) {
      switch (error.code) {
        case "INVALID_EMAIL":
          this.error = "E-mail inválido.";
          break;
        case "EMAIL_TAKEN":
          this.error = "Este e-mail já está sendo utilizado.";
          break;
        case "NETWORK_ERROR":
          this.error = "Aconteceu algum erro ao tentar se conectar ao servidor, tente novamente mais tarde.";
          break;
        default:
          this.error = error;
      }
    }
  });
  }

  login(credentials, loading) {
    this.auth.login(credentials, {
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    }).then((authData) => {
      console.log(authData);
    loading.dismiss();
    this.nav.push(MainTabsPage);
  }).catch((error) => {
      loading.dismiss();
    this.error = error;
    console.log(error);
  });
  }
}
