import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService, LoadingService, ToastService } from 'src/services/services';

@Component({
  selector: 'app-phone-verif',
  templateUrl: './phone-verif.page.html',
  styleUrls: ['./phone-verif.page.scss'],
})
export class PhoneVerifPage implements OnInit {
  public form: FormGroup;
  public phone: any;
  private verificationId: any;
  private action: string;
  private user: any;
  public loading: any = false;

  constructor(private param: ActivatedRoute, private nav: NavController, public auth: AuthService, private toast: ToastService, private fb: FormBuilder) {
      this.param.queryParams.subscribe((params: any) => {
        if (params) {
          this.user = params.user ? JSON.parse(params.user) : {};
          this.action = params.action;
          this.phone = JSON.parse(params.phone);
          this.verificationId = params.verificationId;
        }
      });
    }

  ngOnInit() {
    this.form = this.fb.group({
      code: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern('[0-9]+')] ]
    });

    this.form.reset();
  }

  submit() {
    console.log(this.action);
    this.loading = true;
    if (this.action === 'update') {
      this.auth.updatePhone(this.verificationId, this.form.value.code, this.phone).then( (res: string) => {
        this.loading = false;
        this.nav.navigateRoot(['tabs/profile']);
        this.toast.show(res);
      }).catch(err => {
        console.log(err);
        this.loading = false;
        this.toast.showWithClose(err);
      });
    } else if (this.action === 'register') {
      this.auth.registerByPhone(this.user, this.verificationId, this.form.value.code).then((res: string) => {
        this.toast.show(res);
        this.nav.navigateRoot('tabs');
        this.loading = false;
      }).catch(err => {
        this.loading = false;
        console.log(err);
        this.toast.showWithClose(err);
      });
    } else {
      // login using phone number
      this.auth.phoneAuth(this.verificationId, this.form.value.code, this.phone).then( (res: string) => {
        this.toast.show(res);
        this.nav.navigateForward('tabs');
        this.loading = false;
      }).catch(err => {
        console.log(err);
        this.loading = false;
        this.toast.showWithClose(err.message);
      });
    }
  }

}
