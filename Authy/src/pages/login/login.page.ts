import { Component, OnInit } from '@angular/core';
import { AuthService, LoadingService, ToastService } from 'src/services/services';
import { NavController, Platform, AlertController } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AppVersion } from '@ionic-native/app-version/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private plt: Platform, private router: Router, private auth: AuthService, private apv: AppVersion, private alert: AlertController, private nav: NavController, private toast: ToastService, private loading: LoadingService) {}

  ngOnInit() {
    // if (this.plt.is('cordova')) {
    //   this.apv.getVersionNumber().then((res) => {
    //     console.log(res);
    //   });
    // } else {
    //   console.log(' no cordova');
    // }
  }

  loginFB() {
    this.loading.present().then(() => {
      this.auth.loginByFb().then(() => {
        this.loading.dismiss();
        this.nav.navigateRoot('tabs');
      }, (err) => {
        console.log(err);
        this.loading.dismiss();
        switch (err.code) {
          case 'auth/account-exists-with-different-credential':
            this.showConfirm(err);
            break;
          default:
            this.toast.showWithClose(err.message || err.errorMessage);
            break;
        }
      });
    });
  }

  loginGoogle() {
    this.loading.present().then(() => {
      this.auth.loginByGG().then((res: string) => {
        this.loading.dismiss();
        this.toast.show(res);
        this.nav.navigateRoot('tabs');
      }, (err) => {
        console.log(err);
        this.loading.dismiss();
        switch (err.code) {
          case 'auth/account-exists-with-different-credential':
            this.showConfirm(err);
            break;
          default:
            this.toast.showWithClose(err.message || err.errorMessage);
            break;
        }
      });
    });
  }

  async showConfirm(err) {
    const alert = await this.alert.create({
      header: 'Email Exist',
      message: err.message,
      buttons: [{
          text: 'Ignore',
          handler: () => {
            // this.toast.showWithClose('You cancel login process');
          }
        }, {
          text: 'OK Go Ahead',
          handler: () => {
            if (err.method === 'facebook.com') {
              this.loginFB();
            } else if (err.method === 'google.com') {
              this.loginGoogle();
            } else if (err.method === 'password') {
              // this.nav.navigateRoot('login/email');
              const param: NavigationExtras = {
                queryParams: {
                  email: err.email
                }
              };
              this.router.navigate(['login/email'], param);
            }
          }
        }
      ]
    });
    await alert.present();
  }

}
