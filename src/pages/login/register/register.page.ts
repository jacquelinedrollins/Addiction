import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AuthService, LoadingService, ToastService } from 'src/services/services';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public form: FormGroup;
  public phones: any = [];
  private phone: any = {};
  selected: any;

  constructor(private auth: AuthService, private nav: NavController, private param: ActivatedRoute, private toast: ToastService, private router: Router,
    private loading: LoadingService, private fb: FormBuilder, private http: HttpClient) {
      this.param.queryParams.subscribe((params: any) => {
        if (params) {
          this.phone = params.phone ? JSON.parse(params.phone) : {};
        }
      });
    }

  ngOnInit() {
    this.http.get('assets/country-calling-codes.min.json').subscribe((data: any) => {
      for (let i = 0; i < data.length; i++) {
        data[i].name = data[i].name + ' (+' + data[i].callingCode + ')';
        this.phones.push(data[i]);
      }

      console.log(this.phone);
      this.selected = this.phone && this.phone.area ? this.phone.area : this.phones.filter(q => q.callingCode === '1')[0];
    });

    this.form = this.fb.group({
      name: ['', Validators.required ],
      phone: this.fb.group({
        area: ['+1', [Validators.required]],
        tel: [this.phone ? this.phone.tel : '', [Validators.required, Validators.minLength(8), Validators.maxLength(15), Validators.pattern('[0-9]+')]]
      }),
      email: ['', [Validators.required, Validators.email] ],
      pass: ['', [Validators.required, Validators.minLength(6)] ],
      pass2: ['', [Validators.required, Validators.minLength(6)] ]
    });
  }

  submit() {
    console.log(this.form.value);
    this.loading.present();
    this.auth.checkPhoneNumber(this.form.value.phone).then((q: string) => {
      this.toast.showWithClose(q);
      this.loading.dismiss();
    }).catch(() => {
      this.auth.fetchProvidersForEmail(this.form.value.email).then(() => {
        this.toast.showWithClose('Email ' + this.form.value.email + ' is already used');
        this.loading.dismiss();
      }).catch(() => {
        this.auth.sendSMSVerify(this.form.value.phone).then((res: any) => {
          this.loading.dismiss();
          const param: NavigationExtras = {
            queryParams: {
              action: 'register',
              phone: JSON.stringify(this.form.value.phone),
              user: JSON.stringify(this.form.value),
              verificationId: this.auth.platform === 'ios' ? res : res.verificationId
            }
          };
          this.router.navigate(['login/verif-phone'], param);
        }).catch(err => {
          console.log(err);
          this.toast.showWithClose(err);
          this.loading.dismiss();
        });
      });
    });
  }

  showPrivacy() {}

}
