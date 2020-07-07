(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-forgot-pass-forgot-pass-module"],{

/***/ "./src/pages/login/forgot-pass/forgot-pass.module.ts":
/*!***********************************************************!*\
  !*** ./src/pages/login/forgot-pass/forgot-pass.module.ts ***!
  \***********************************************************/
/*! exports provided: ForgotPassPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPassPageModule", function() { return ForgotPassPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgot_pass_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-pass.page */ "./src/pages/login/forgot-pass/forgot-pass.page.ts");







var routes = [
    {
        path: '',
        component: _forgot_pass_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPassPage"]
    }
];
var ForgotPassPageModule = /** @class */ (function () {
    function ForgotPassPageModule() {
    }
    ForgotPassPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_forgot_pass_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPassPage"]]
        })
    ], ForgotPassPageModule);
    return ForgotPassPageModule;
}());



/***/ }),

/***/ "./src/pages/login/forgot-pass/forgot-pass.page.html":
/*!***********************************************************!*\
  !*** ./src/pages/login/forgot-pass/forgot-pass.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"/login\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Forgot Password</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding scroll=\"false\">\n  <ion-list no-margin padding margin-top>\n      <h6>Can't access your account? Please enter your email below, we will send password reset link into your email.</h6>\n      <form margin-top [formGroup]=\"form\" (ngSubmit)=\"submit()\" autocomplete=\"off\">\n          <ion-item no-padding [class.invalid]=\"form.get('email').invalid\">\n            <ion-label position=\"floating\">Email</ion-label>\n            <ion-input #input placeholder=\"john@doe.com\" formControlName=\"email\" clearInput autocomplete=\"off\" type=\"email\" required></ion-input>\n          </ion-item>\n          \n          <div class=\"error\" *ngIf=\"form.get('email').invalid && (form.get('email').touched || form.get('email').dirty)\">Email is not valid</div>\n          \n          <div margin-top>\n            <ion-button type=\"submit\" shape=\"round\" expand=\"block\" [disabled]=\"form.invalid\">Reset Password</ion-button>\n          </div>\n      </form>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/pages/login/forgot-pass/forgot-pass.page.scss":
/*!***********************************************************!*\
  !*** ./src/pages/login/forgot-pass/forgot-pass.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvbG9naW4vZm9yZ290LXBhc3MvZm9yZ290LXBhc3MucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/pages/login/forgot-pass/forgot-pass.page.ts":
/*!*********************************************************!*\
  !*** ./src/pages/login/forgot-pass/forgot-pass.page.ts ***!
  \*********************************************************/
/*! exports provided: ForgotPassPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPassPage", function() { return ForgotPassPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_services_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/services */ "./src/services/services.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var ForgotPassPage = /** @class */ (function () {
    function ForgotPassPage(auth, toast, nav, loading, fb) {
        this.auth = auth;
        this.toast = toast;
        this.nav = nav;
        this.loading = loading;
        this.fb = fb;
    }
    ForgotPassPage.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
        });
    };
    ForgotPassPage.prototype.submit = function () {
        var _this = this;
        this.loading.present();
        console.log(this.form.value.email);
        this.auth.resetPassword(this.form.value.email).then(function (res) {
            console.log(res);
            _this.form.reset();
            _this.toast.showWithClose('Password reset link was successfully sent to your email email', 'success');
            _this.loading.dismiss();
        }).catch(function (err) {
            console.log(err);
            _this.toast.showWithClose(err.message);
            _this.loading.dismiss();
        });
    };
    ForgotPassPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-pass',
            template: __webpack_require__(/*! ./forgot-pass.page.html */ "./src/pages/login/forgot-pass/forgot-pass.page.html"),
            styles: [__webpack_require__(/*! ./forgot-pass.page.scss */ "./src/pages/login/forgot-pass/forgot-pass.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"], src_services_services__WEBPACK_IMPORTED_MODULE_3__["ToastService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            src_services_services__WEBPACK_IMPORTED_MODULE_3__["LoadingService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ForgotPassPage);
    return ForgotPassPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-forgot-pass-forgot-pass-module.js.map