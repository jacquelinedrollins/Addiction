import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService, LoadingService, ToastService } from 'src/services/services';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login-email',
  templateUrl: './login-email.page.html',
  styleUrls: ['./login-email.page.scss'],
})
export class LoginEmailPage implements OnInit {
  public form: FormGroup;
  public email: string;

  constructor(private auth: AuthService, private param: ActivatedRoute, private toast: ToastService, private nav: NavController,
    private loading: LoadingService, private fb: FormBuilder) {
      this.param.queryParams.subscribe((params: any) => {
        if (params) {
          this.email = params.email;
        }
      });
    }

  ngOnInit() {
    this.form = this.fb.group({
      email: [this.email, [Validators.required, Validators.email] ],
      pass: ['', [Validators.required, Validators.minLength(6)] ]
    });
  }

  submit() {
    this.loading.present();
    console.log(this.form.value);
    this.auth.loginByEmail(this.form.value).then((res: any) => {
      this.loading.dismiss();
      this.nav.navigateRoot('tabs');
    }).catch(err => {
      console.log(err);
      this.toast.showWithClose(err);
      this.loading.dismiss();
    });
  }

}
