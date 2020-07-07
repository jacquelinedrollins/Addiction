import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService, LoadingService, ToastService } from 'src/services/services';
import { NavController, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-phone-auth',
  templateUrl: './phone-auth.page.html',
  styleUrls: ['./phone-auth.page.scss'],
})
export class PhoneAuthPage implements OnInit {
  public form: FormGroup;
  public phones: any = [];
  selected: any;

  constructor(private auth: AuthService, private alert: AlertController, private router: Router, private toast: ToastService, private nav: NavController,
    private loading: LoadingService, private fb: FormBuilder, private http: HttpClient) {
      this.form = this.fb.group({
        phone: this.fb.group({
          area: ['+1', [Validators.required]],
          tel: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15), Validators.pattern('[0-9]+')]]
        })
      });
    }

  ngOnInit() {
    this.http.get('assets/country-calling-codes.min.json').subscribe((data: any) => {
      for (let i = 0; i < data.length; i++) {
        data[i].name = data[i].name + ' (+' + data[i].callingCode + ')';
        this.phones.push(data[i]);
      }

      this.selected = this.phones.filter(q => q.callingCode === '1')[0];
    });
  }

  submit() {
    this.loading.present().then(() => {
      this.auth.checkPhoneNumber(this.form.value.phone).then(() => {
        this.auth.sendSMSVerify(this.form.value.phone).then((res: any) => {
          this.loading.dismiss();
          const param: NavigationExtras = {
            queryParams: {
              phone: JSON.stringify(this.form.value.phone),
              verificationId: this.auth.platform === 'ios' ? res : res.verificationId
            }
          };
          this.router.navigate(['login/verif-phone'], param);
        }).catch(err => {
          console.log(err);
          this.loading.dismiss();
          this.toast.showWithClose(err);
        });
      }).catch((err) => {
        this.loading.dismiss();
        this.notRegistered(err);
      });
    });
  }

  async notRegistered(err) {
    const alert = await this.alert.create({
      header: 'Not Registered yet',
      message: err,
      buttons: [{
          text: 'No',
          handler: () => {}
        }, {
          text: 'YES',
          handler: () => {
            const param: NavigationExtras = {
              queryParams: {
                phone: JSON.stringify(this.form.value.phone),
              }
            };
            this.router.navigate(['register'], param);
          }
        }
      ]
    });
    await alert.present();
  }
}
