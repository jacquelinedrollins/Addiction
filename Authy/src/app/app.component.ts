import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';

import { AuthService, LoadingService } from 'src/services/services';
import * as firebase from 'firebase/app';
import { FIREBASE } from './app.global';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(private apv: AppVersion, private loading: LoadingService, private platform: Platform, private auth: AuthService,
    private router: Router, private nav: NavController, private splashScreen: SplashScreen, private statusBar: StatusBar) {
      firebase.initializeApp(FIREBASE);
      this.platform.ready().then((e) => {
        statusBar.styleDefault();
        splashScreen.hide();

        this.loading.present().then(() => {
          this.auth.currentUser().then((res: any) => {
            this.loading.dismiss();
            this.nav.setDirection('root');
            this.nav.navigateRoot('tabs');
            // this.router.navigate(['login/phone']);
          }).catch(err => {
            this.loading.dismiss();
            this.router.navigate(['login']);
          });
        });

        // this.apv.getVersionNumber().then((res) => {
        //   console.log(res);
        // }, (err) => {
        //   console.log(err);
        // });

        if (this.platform.is('cordova')) {
          console.log('cordova ready');
          this.auth.setPlatform('cordova');
        }

        if (this.platform.is('android')) {
          this.auth.setPlatform('android');
        } else if (this.platform.is('ios')) {
          auth.setPlatform('ios');
        } else if (this.platform.is('mobileweb')) {
          this.auth.setPlatform('mobileweb');
        }
      });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
