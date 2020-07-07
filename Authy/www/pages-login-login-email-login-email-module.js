(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-email-login-email-module"],{

/***/ "./src/pages/login/login-email/login-email.module.ts":
/*!***********************************************************!*\
  !*** ./src/pages/login/login-email/login-email.module.ts ***!
  \***********************************************************/
/*! exports provided: LoginEmailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginEmailPageModule", function() { return LoginEmailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_email_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-email.page */ "./src/pages/login/login-email/login-email.page.ts");







var routes = [
    {
        path: '',
        component: _login_email_page__WEBPACK_IMPORTED_MODULE_6__["LoginEmailPage"]
    }
];
var LoginEmailPageModule = /** @class */ (function () {
    function LoginEmailPageModule() {
    }
    LoginEmailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_email_page__WEBPACK_IMPORTED_MODULE_6__["LoginEmailPage"]]
        })
    ], LoginEmailPageModule);
    return LoginEmailPageModule;
}());



/***/ }),

/***/ "./src/pages/login/login-email/login-email.page.html":
/*!***********************************************************!*\
  !*** ./src/pages/login/login-email/login-email.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"/login\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Login using Email</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content scroll=\"false\">\n  <ion-list no-margin padding margin-top>\n    <form margin-top [formGroup]=\"form\" (ngSubmit)=\"submit()\" autocomplete=\"off\">\n\n    <ion-item no-padding [class.invalid]=\"form.get('email').invalid\">\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input placeholder=\"john@doe.com\" formControlName=\"email\" clearInput autocomplete=\"off\" type=\"email\" required></ion-input>\n    </ion-item>\n    <div class=\"error\" *ngIf=\"form.get('email').invalid && (form.get('email').touched || form.get('email').dirty)\">Email is not valid</div>\n\n    <ion-item no-padding [class.invalid]=\"form.get('pass').invalid\">\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input placeholder=\"Your password\" formControlName=\"pass\" clearInput autocomplete=\"off\" type=\"password\" minlength=\"6\" required></ion-input>\n    </ion-item>\n    <div class=\"error\" *ngIf=\"form.get('pass').hasError('required') && (form.get('pass').touched || form.get('pass').dirty)\">Password is required</div>\n    <div class=\"error\" *ngIf=\"form.get('pass').hasError('minlength') && (form.get('pass').touched || form.get('pass').dirty)\">Password length must be > 6</div>\n  \n    <div margin-top>\n      <ion-button icon-start margin-top type=\"submit\" shape=\"round\" expand=\"block\" [disabled]=\"form.invalid\">\n        Sign In\n      </ion-button>\n      <ion-button margin-top fill=\"clear\" expand=\"block\" tappable routerLink=\"/login/forgot\">Forgot password?</ion-button>\n    </div>\n    \n    </form>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/pages/login/login-email/login-email.page.scss":
/*!***********************************************************!*\
  !*** ./src/pages/login/login-email/login-email.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvbG9naW4vbG9naW4tZW1haWwvbG9naW4tZW1haWwucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/pages/login/login-email/login-email.page.ts":
/*!*********************************************************!*\
  !*** ./src/pages/login/login-email/login-email.page.ts ***!
  \*********************************************************/
/*! exports provided: LoginEmailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginEmailPage", function() { return LoginEmailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_services_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/services */ "./src/services/services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var LoginEmailPage = /** @class */ (function () {
    function LoginEmailPage(auth, param, toast, nav, loading, fb) {
        var _this = this;
        this.auth = auth;
        this.param = param;
        this.toast = toast;
        this.nav = nav;
        this.loading = loading;
        this.fb = fb;
        this.param.queryParams.subscribe(function (params) {
            if (params) {
                _this.email = params.email;
            }
        });
    }
    LoginEmailPage.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            email: [this.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            pass: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    };
    LoginEmailPage.prototype.submit = function () {
        var _this = this;
        this.loading.present();
        console.log(this.form.value);
        this.auth.loginByEmail(this.form.value).then(function (res) {
            _this.loading.dismiss();
            _this.nav.navigateRoot('tabs');
        }).catch(function (err) {
            console.log(err);
            _this.toast.showWithClose(err);
            _this.loading.dismiss();
        });
    };
    LoginEmailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-email',
            template: __webpack_require__(/*! ./login-email.page.html */ "./src/pages/login/login-email/login-email.page.html"),
            styles: [__webpack_require__(/*! ./login-email.page.scss */ "./src/pages/login/login-email/login-email.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_services_services__WEBPACK_IMPORTED_MODULE_3__["ToastService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            src_services_services__WEBPACK_IMPORTED_MODULE_3__["LoadingService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], LoginEmailPage);
    return LoginEmailPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-email-login-email-module.js.map