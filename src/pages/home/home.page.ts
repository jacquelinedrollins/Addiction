import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService, LoadingService, ToastService } from '../../services/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public auth: AuthService, private router: Router, public alert: AlertController, private loading: LoadingService, private toast: ToastService) {}

  async verifyEmail() {
    const alert = await this.alert.create({
      header: 'Email Verification',
      message: 'Are you sure want to verify your email?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {}
        },
        {
          text: 'Yes',
          handler: () => {
            this.loading.present();
            this.auth.sendEmailConfirm(this.auth.user).then((res: any) => {
              this.toast.showWithClose(res);
              this.loading.dismiss();
            });
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
  }

  connectFB() {
    if (this.auth.user.facebook) {
      this.auth.unlink('facebook.com').then((res: string) => {
        this.toast.show(res);
      }).catch(err => {
        this.toast.showWithClose(err);
      });
    } else {
      this.loading.present().then(() => {
        this.auth.loginByFb().then((res: string) => {
          this.loading.dismiss();
          this.toast.show(res);
        }).catch(err => {
          console.log(err);
          this.loading.dismiss();
          this.toast.showWithClose(err.message  || err.errorMessage);
        });
      });
    }
  }

  connectGG() {
    if (this.auth.user.google) {
      this.auth.unlink('google.com').then((res: string) => {
        this.toast.show(res);
      }).catch(err => {
        this.toast.showWithClose(err);
      });
    } else {
      this.loading.present().then(() => {
        this.auth.loginByGG().then((res: string) => {
          this.loading.dismiss();
          this.toast.show(res);
        }).catch(err => {
          console.log(err);
          this.loading.dismiss();
          this.toast.showWithClose(err.message  || err.errorMessage);
        });
      });
    }
  }
}
