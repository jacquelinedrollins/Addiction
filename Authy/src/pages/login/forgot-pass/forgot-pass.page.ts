import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService, LoadingService, ToastService } from 'src/services/services';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.page.html',
  styleUrls: ['./forgot-pass.page.scss'],
})
export class ForgotPassPage implements OnInit {
  public form: FormGroup;

  constructor(private auth: AuthService, private toast: ToastService, private nav: NavController,
    private loading: LoadingService, private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email] ]
    });
  }

  submit() {
    this.loading.present();
    console.log(this.form.value.email);
    this.auth.resetPassword(this.form.value.email).then((res) => {
      console.log(res);
      this.form.reset();
      this.toast.showWithClose('Password reset link was successfully sent to your email email', 'success');
      this.loading.dismiss();
    }).catch(err => {
      console.log(err);
      this.toast.showWithClose(err.message);
      this.loading.dismiss();
    });
  }

}
