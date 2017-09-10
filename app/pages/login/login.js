import {NavController, Loading} from 'ionic-angular';
import {Component} from '@angular/core';
import {ForgotPasswordPage} from '../forgot-password/forgot-password';
import {SignUpPage} from '../sign-up/sign-up';
import {HomePage} from '../home/home';
import {MainTabsPage} from '../main-tabs/main-tabs';
import {MapPage} from '../map/map';

import {FirebaseAuth, AuthProviders, AuthMethods} from "angularfire2";

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@
Component({
    templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {
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

    // process login
    // login() {
    //   // add your login code here
    //   this.nav.push(MainTabsPage);
    // }

    login(credentials) {

        let loading = Loading.create({
            content: "Por favor aguarde..."
        });
        this.nav.present(loading);

        this.auth.login(credentials, {
            provider: AuthProviders.Password,
            method: AuthMethods.Password
        })
            .then((authData) => {
                console.log(authData);
                loading.dismiss();
                this.nav.setRoot(MapPage);
            })
            .catch((error) => {
                loading.dismiss();
                if (error) {
                    switch (error.code) {
                        case "INVALID_EMAIL":
                            this.error = "E-mail inválido.";
                            break;
                        case "INVALID_USER":
                            this.error = "E-mail ou senha incorretos.";
                            break;
                        case "INVALID_PASSWORD":
                            this.error = "E-mail ou senha incorretos.";
                            break;
                        case "NETWORK_ERROR":
                            this.error = "Aconteceu algum erro ao tentar se conectar ao servidor, tente novamente mais tarde.";
                            break;
                        default:
                            this.error = error;
                    }
                }
                console.log(error);
            });
    }


    // go to sign up page
    signUp() {
        // add our sign up code here
        this.nav.push(SignUpPage);
    }
}
