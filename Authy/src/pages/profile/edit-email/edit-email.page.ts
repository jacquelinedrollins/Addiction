import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService, LoadingService, ToastService } from 'src/services/services';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit-email',
  templateUrl: './edit-email.page.html',
  styleUrls: ['./edit-email.page.scss'],
})
export class EditEmailPage implements OnInit {
  public form: FormGroup;

  constructor(public auth: AuthService, private toast: ToastService, private nav: NavController,
    private loading: LoadingService, private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      pass: ['', [Validators.required, Validators.minLength(6)] ],
      email: ['', [Validators.required, Validators.email] ]
    });
  }

  submit()  {
    console.log(this.form.value);
    this.loading.present();
    this.auth.updateEmail(this.form.value).then((res: any) => {
      this.loading.dismiss();
      this.toast.show(res);
      this.form.reset();
    }).catch(err => {
      console.log(err);
      this.toast.showWithClose(err);
      this.loading.dismiss();
    });
  }

}
