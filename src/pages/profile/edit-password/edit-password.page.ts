import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService, LoadingService, ToastService } from 'src/services/services';
import { NavController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.page.html',
  styleUrls: ['./edit-password.page.scss'],
})
export class EditPasswordPage implements OnInit {
  public form: FormGroup;

  constructor(private auth: AuthService, private action: ActionSheetController, private toast: ToastService, private nav: NavController,
    private loading: LoadingService, private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      old: ['', [Validators.required, Validators.minLength(6)] ],
      pass: ['', [Validators.required, Validators.minLength(6)] ],
      pass2: ['', [Validators.required, Validators.minLength(6)] ]
    });
  }

  submit() {
    console.log(this.form.value);
    this.loading.present();
    this.auth.updatePass(this.form.value.old, this.form.value.pass).then((res: any) => {
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
