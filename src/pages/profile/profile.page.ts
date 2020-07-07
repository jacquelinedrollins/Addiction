import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { AuthService, LoadingService } from 'src/services/services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  private win: any = window;

  constructor(public alert: AlertController, private nav: NavController, public auth: AuthService, private loading: LoadingService) { }

  ngOnInit() {
  }

  normalize(url) {
    return this.auth.platform === 'cordova' ? this.win.Ionic.WebView.convertFileSrc(url) : url;
  }

  async logout() {
    const alert = await this.alert.create({
      header: 'Log Out',
      message: 'Are you sure want to logout?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {}
        },
        {
          text: 'Yes',
          handler: () => {
            this.loading.present().then( () => {
              this.auth.logout().then(() => {
                this.loading.dismiss().then( () => {
                  this.nav.navigateRoot(['login']);
                });
              });
            });
          }
        }
      ]
    });

    await alert.present();
  }

}
