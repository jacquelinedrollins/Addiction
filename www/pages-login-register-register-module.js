(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-register-register-module"],{

/***/ "./src/pages/login/register/register.module.ts":
/*!*****************************************************!*\
  !*** ./src/pages/login/register/register.module.ts ***!
  \*****************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register.page */ "./src/pages/login/register/register.page.ts");








var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_7__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_5__["IonicSelectableModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_7__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/pages/login/register/register.page.html":
/*!*****************************************************!*\
  !*** ./src/pages/login/register/register.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"/login\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Register</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding-horizontal scroll=\"false\">\n  <ion-list no-margin padding>\n    <form margin-top [formGroup]=\"form\" (ngSubmit)=\"submit()\" autocomplete=\"off\">\n    <ion-item no-padding [class.invalid]=\"form.get('name').invalid\">\n      <ion-label position=\"floating\">Name</ion-label>\n      <ion-input placeholder=\"Your name\" formControlName=\"name\" autocomplete=\"off\" type=\"text\" required></ion-input>\n    </ion-item>\n    <div class=\"error\" *ngIf=\"form.get('name').hasError('required') && (form.get('name').touched || form.get('name').dirty)\">Name is required</div>\n\n    <ion-row no-padding formGroupName=\"phone\">\n      <ion-col size=\"3\" no-padding tappable>\n        <ion-item no-padding>\n          <ion-label position=\"floating\">Country</ion-label>\n          <ionic-selectable\n            [(ngModel)]=\"selected\"\n            searchPlaceholder=\"Search country\"\n            shouldFocusSearchbar=\"true\"\n            headerColor=\"primary\"\n            formControlName=\"area\"\n            [items]=\"phones\"\n            itemValueField=\"callingCode\"\n            itemTextField=\"name\"\n            [canSearch]=\"true\">\n          </ionic-selectable>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"9\" no-padding padding-left>\n        <ion-item no-padding [class.invalid]=\"form.get('phone.tel').invalid\">\n          <ion-label position=\"floating\">Phone</ion-label>\n          <ion-input #input type=\"tel\" placeholder=\"e.g. 8128080xxxx\" pattern=\"[0-9]*\" clearInput formControlName=\"tel\" autocomplete=\"off\" required minlength=\"8\"></ion-input>\n        </ion-item>\n        <div class=\"error\" *ngIf=\"form.get('phone.tel').hasError('required') && (form.get('phone.tel').touched || form.get('phone.tel').dirty)\">Phone is required</div>\n        <div class=\"error\" *ngIf=\"form.get('phone.tel').hasError('minlength') && (form.get('phone.tel').touched || form.get('phone.tel').dirty)\">Phone must be >= 8 characters</div>\n        <div class=\"error\" *ngIf=\"form.get('phone.tel').hasError('maxlength') && (form.get('phone.tel').touched || form.get('phone.tel').dirty)\">Phone number max length 15 characters</div>\n        <div class=\"error\" *ngIf=\"form.get('phone.tel').hasError('pattern') && (form.get('phone.tel').touched || form.get('phone.tel').dirty)\">Phone number must be numeric</div>\n      </ion-col>\n    </ion-row>\n\n    <ion-item no-padding [class.invalid]=\"form.get('email').invalid\">\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input placeholder=\"john@doe.com\" formControlName=\"email\" autocomplete=\"off\" type=\"email\" required></ion-input>\n    </ion-item>\n    <div class=\"error\" *ngIf=\"form.get('email').invalid && (form.get('email').touched || form.get('email').dirty)\">Email is not valid</div>\n\n    <ion-item no-padding [class.invalid]=\"form.get('pass').invalid\">\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input formControlName=\"pass\" autocomplete=\"off\" type=\"password\" minlength=\"6\" required></ion-input>\n    </ion-item>\n    <div class=\"error\" *ngIf=\"form.get('pass').hasError('required') && (form.get('pass').touched || form.get('pass').dirty)\">Password is required</div>\n    <div class=\"error\" *ngIf=\"form.get('pass').hasError('minlength') && (form.get('pass').touched || form.get('pass').dirty)\">Password length must be >= 6</div>\n\n    <ion-item no-padding [class.invalid]=\"form.get('pass2').invalid\">\n      <ion-label position=\"floating\">Password Confirmation</ion-label>\n      <ion-input formControlName=\"pass2\" autocomplete=\"off\" type=\"password\" required></ion-input>\n    </ion-item>\n    <div class=\"error\" *ngIf=\"form.get('pass2').hasError('required') && (form.get('pass2').touched || form.get('pass2').dirty)\">Password confirmation is required</div>\n    <div class=\"error\" *ngIf=\"(form.get('pass').value != form.get('pass2').value) && (form.get('pass2').touched || form.get('pass2').dirty)\">Password confirmation is not valid</div>\n\n    <div margin-top>\n      <ion-button margin-top type=\"submit\" shape=\"round\" expand=\"block\" [disabled]=\"form.invalid || (form.get('pass').value != form.get('pass2').value)\">Sign Up</ion-button>\n      <div margin-top text-center (click)=\"showPrivacy()\">\n        By signing up, you agree with our <a>terms</a> & <a>privacy policy</a>.\n      </div>\n    </div>\n    </form>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/pages/login/register/register.page.scss":
/*!*****************************************************!*\
  !*** ./src/pages/login/register/register.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvbG9naW4vcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/pages/login/register/register.page.ts":
/*!***************************************************!*\
  !*** ./src/pages/login/register/register.page.ts ***!
  \***************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/services */ "./src/services/services.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var RegisterPage = /** @class */ (function () {
    function RegisterPage(auth, nav, param, toast, router, loading, fb, http) {
        var _this = this;
        this.auth = auth;
        this.nav = nav;
        this.param = param;
        this.toast = toast;
        this.router = router;
        this.loading = loading;
        this.fb = fb;
        this.http = http;
        this.phones = [];
        this.phone = {};
        this.param.queryParams.subscribe(function (params) {
            if (params) {
                _this.phone = params.phone ? JSON.parse(params.phone) : {};
            }
        });
    }
    RegisterPage.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('assets/country-calling-codes.min.json').subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                data[i].name = data[i].name + ' (+' + data[i].callingCode + ')';
                _this.phones.push(data[i]);
            }
            console.log(_this.phone);
            _this.selected = _this.phone && _this.phone.area ? _this.phone.area : _this.phones.filter(function (q) { return q.callingCode === '1'; })[0];
        });
        this.form = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: this.fb.group({
                area: ['+1', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                tel: [this.phone ? this.phone.tel : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]+')]]
            }),
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            pass: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            pass2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    };
    RegisterPage.prototype.submit = function () {
        var _this = this;
        console.log(this.form.value);
        this.loading.present();
        this.auth.checkPhoneNumber(this.form.value.phone).then(function (q) {
            _this.toast.showWithClose(q);
            _this.loading.dismiss();
        }).catch(function () {
            _this.auth.fetchProvidersForEmail(_this.form.value.email).then(function () {
                _this.toast.showWithClose('Email ' + _this.form.value.email + ' is already used');
                _this.loading.dismiss();
            }).catch(function () {
                _this.auth.sendSMSVerify(_this.form.value.phone).then(function (res) {
                    _this.loading.dismiss();
                    var param = {
                        queryParams: {
                            action: 'register',
                            phone: JSON.stringify(_this.form.value.phone),
                            user: JSON.stringify(_this.form.value),
                            verificationId: _this.auth.platform === 'ios' ? res : res.verificationId
                        }
                    };
                    _this.router.navigate(['login/verif-phone'], param);
                }).catch(function (err) {
                    console.log(err);
                    _this.toast.showWithClose(err);
                    _this.loading.dismiss();
                });
            });
        });
    };
    RegisterPage.prototype.showPrivacy = function () { };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/pages/login/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/pages/login/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_services_services__WEBPACK_IMPORTED_MODULE_4__["ToastService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_services_services__WEBPACK_IMPORTED_MODULE_4__["LoadingService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-register-register-module.js.map