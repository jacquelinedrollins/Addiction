(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-phone-verif-phone-verif-module"],{

/***/ "./src/pages/login/phone-verif/phone-verif.module.ts":
/*!***********************************************************!*\
  !*** ./src/pages/login/phone-verif/phone-verif.module.ts ***!
  \***********************************************************/
/*! exports provided: PhoneVerifPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneVerifPageModule", function() { return PhoneVerifPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _phone_verif_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./phone-verif.page */ "./src/pages/login/phone-verif/phone-verif.page.ts");








var routes = [
    {
        path: '',
        component: _phone_verif_page__WEBPACK_IMPORTED_MODULE_7__["PhoneVerifPage"]
    }
];
var PhoneVerifPageModule = /** @class */ (function () {
    function PhoneVerifPageModule() {
    }
    PhoneVerifPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_5__["IonicSelectableModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_phone_verif_page__WEBPACK_IMPORTED_MODULE_7__["PhoneVerifPage"]]
        })
    ], PhoneVerifPageModule);
    return PhoneVerifPageModule;
}());



/***/ }),

/***/ "./src/pages/login/phone-verif/phone-verif.page.html":
/*!***********************************************************!*\
  !*** ./src/pages/login/phone-verif/phone-verif.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n        <ion-back-button routerDirection=\"backward\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Verification</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding scroll=\"false\">\n  <h6>A verification code has been sent to your mobile <b>+{{phone.area.callingCode}}{{phone.tel}}</b>. Please enter the verification code below.</h6>\n  <form [formGroup]=\"form\" (ngSubmit)=\"submit()\" novalidate>\n    <ion-item no-padding margin-vertical>\n      <ion-label position=\"floating\">Verification Code</ion-label>\n      <ion-input #input pattern=\"[0-9]*\" no-margin type=\"tel\" formControlName=\"code\"></ion-input>\n    </ion-item>\n    <div class=\"error\" *ngIf=\"form.get('code').hasError('minlength') && (form.get('code').touched || form.get('code').dirty)\">Code must be 6 digit length</div>\n    <div class=\"error\" *ngIf=\"form.get('code').hasError('maxlength') && (form.get('code').touched || form.get('code').dirty)\">Code must be 6 digit length</div>\n    <div class=\"error\" *ngIf=\"form.get('code').hasError('pattern') && (form.get('code').touched || form.get('code').dirty)\">Code must be numeric</div>\n    <ion-button type=\"submit\" icon-start margin-vertical [disabled]=\"loading || form.invalid\" shape=\"round\" expand=\"block\" tappable (click)=\"submit()\">\n      <ion-spinner *ngIf=\"loading\" slot=\"start\"></ion-spinner>\n      Submit\n    </ion-button>\n  </form>\n  <!-- <div *ngIf=\"tick == 0; else nosend\" >\n    <p text-center>Dont receive verification code?</p>\n    <ion-button type=\"submit\" shape=\"round\" fill=\"outline\" tappable (click)=\"resend()\">Resend Code</ion-button>\n  </div>\n  <ng-template #nosend>\n    <p text-center>Please wait <b>{{tick}} seconds</b> to resend</p>\n  </ng-template>\n\n  <ng-container *ngIf=\"!data.from\" margin-top>\n    <div class=\"divider\" margin-top>\n        <div class=\"text\"> OR </div>\n    </div>\n    <div margin-top>\n      <ion-button type=\"button\" tappable (click)=\"backToLogin()\" shape=\"round\" expand=\"block\" color=\"secondary\" shape=\"round\" expand=\"block\">Back to Login</ion-button>\n    </div>\n  </ng-container> -->\n</ion-content>\n"

/***/ }),

/***/ "./src/pages/login/phone-verif/phone-verif.page.scss":
/*!***********************************************************!*\
  !*** ./src/pages/login/phone-verif/phone-verif.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-input {\n  font-size: 2em;\n  text-align: center;\n  letter-spacing: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taXJ6YWlsaGFtaS9Ecm9wYm94L2lvbmljcHJlbWl1bS9hdXRoeTIvc3JjL3BhZ2VzL2xvZ2luL3Bob25lLXZlcmlmL3Bob25lLXZlcmlmLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsb0JBQW9CLEVBQUEiLCJmaWxlIjoic3JjL3BhZ2VzL2xvZ2luL3Bob25lLXZlcmlmL3Bob25lLXZlcmlmLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbnB1dHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/pages/login/phone-verif/phone-verif.page.ts":
/*!*********************************************************!*\
  !*** ./src/pages/login/phone-verif/phone-verif.page.ts ***!
  \*********************************************************/
/*! exports provided: PhoneVerifPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneVerifPage", function() { return PhoneVerifPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_services_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/services/services */ "./src/services/services.ts");






var PhoneVerifPage = /** @class */ (function () {
    function PhoneVerifPage(param, nav, auth, toast, fb) {
        var _this = this;
        this.param = param;
        this.nav = nav;
        this.auth = auth;
        this.toast = toast;
        this.fb = fb;
        this.loading = false;
        this.param.queryParams.subscribe(function (params) {
            if (params) {
                _this.user = params.user ? JSON.parse(params.user) : {};
                _this.action = params.action;
                _this.phone = JSON.parse(params.phone);
                _this.verificationId = params.verificationId;
            }
        });
    }
    PhoneVerifPage.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]+')]]
        });
    };
    PhoneVerifPage.prototype.submit = function () {
        var _this = this;
        if (this.action === 'update') {
            // this.loading.present().then(() => {
            this.auth.updatePhone(this.verificationId, this.form.value.code, this.phone).then(function (res) {
                // this.loading.dismiss();
                _this.nav.navigateRoot(['tabs/profile']);
                _this.toast.show(res);
            }).catch(function (err) {
                console.log(err);
                // this.loading.dismiss();
                _this.toast.showWithClose(err);
            });
            // });
        }
        else if (this.action === 'register') {
            this.loading = true;
            this.auth.registerByPhone(this.user, this.verificationId, this.form.value.code).then(function (res) {
                _this.toast.show(res);
                _this.nav.navigateRoot('tabs');
                _this.loading = false;
            }).catch(function (err) {
                _this.loading = false;
                console.log(err);
                _this.toast.showWithClose(err);
            });
        }
        else {
            // login using phone number
            // this.loading.present().then(() => {
            this.auth.phoneAuth(this.verificationId, this.form.value.code, this.phone).then(function (res) {
                _this.toast.show(res);
                _this.nav.navigateForward('tabs');
                // this.loading.dismiss();
            }).catch(function (err) {
                console.log(err);
                // this.loading.dismiss();
                _this.toast.showWithClose(err);
            });
            // });
        }
    };
    PhoneVerifPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-phone-verif',
            template: __webpack_require__(/*! ./phone-verif.page.html */ "./src/pages/login/phone-verif/phone-verif.page.html"),
            styles: [__webpack_require__(/*! ./phone-verif.page.scss */ "./src/pages/login/phone-verif/phone-verif.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], src_services_services__WEBPACK_IMPORTED_MODULE_5__["AuthService"], src_services_services__WEBPACK_IMPORTED_MODULE_5__["ToastService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], PhoneVerifPage);
    return PhoneVerifPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-phone-verif-phone-verif-module.js.map