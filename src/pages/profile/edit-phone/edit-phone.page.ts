import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AuthService, LoadingService, ToastService } from 'src/services/services';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-phone',
  templateUrl: './edit-phone.page.html',
  styleUrls: ['./edit-phone.page.scss'],
})
export class EditPhonePage implements OnInit {
  public form: FormGroup;
  public phones: any = [];
  public action: string;
  selected: any;

  constructor(public auth: AuthService, private param: ActivatedRoute, private router: Router, private toast: ToastService,
    private loading: LoadingService, private fb: FormBuilder, private http: HttpClient) {
    }

  ngOnInit() {
    this.http.get('assets/country-calling-codes.min.json').subscribe((data: any) => {

      for (let i = 0; i < data.length; i++) {
        data[i].name = data[i].name + ' (+' + data[i].callingCode + ')';
        this.phones.push(data[i]);
      }

      this.selected = this.phones.filter(q => q.callingCode === '1')[0];
    });

    this.form = this.fb.group({
      phone: this.fb.group({
        area: ['', [Validators.required]],
        tel: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15), Validators.pattern('[0-9]+')]]
      })
    });
  }

  submit() {
    console.log(this.form.value);
    if (this.auth.user.phone === '+' + this.form.value.phone.area.callingCode + this.form.value.phone.tel) {
      this.toast.showWithClose('New phone number can not be same as previous phone number');
    } else {
      this.loading.present();
      this.auth.sendSMSVerify(this.form.value.phone).then((res: any) => {
        this.loading.dismiss();
        const param: NavigationExtras = {
          queryParams: {
            action: 'update',
            phone: JSON.stringify(this.form.value.phone),
            verificationId: this.auth.platform === 'ios' ? res : res.verificationId
          }
        };
        this.router.navigate(['login/verif-phone'], param);
      }).catch(err => {
        console.log(err);
        this.loading.dismiss();
        this.toast.showWithClose(err.description);
      });
    }
  }
}
