(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-phone-auth-phone-auth-module"],{

/***/ "./src/pages/login/phone-auth/phone-auth.module.ts":
/*!*********************************************************!*\
  !*** ./src/pages/login/phone-auth/phone-auth.module.ts ***!
  \*********************************************************/
/*! exports provided: PhoneAuthPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneAuthPageModule", function() { return PhoneAuthPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _phone_auth_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./phone-auth.page */ "./src/pages/login/phone-auth/phone-auth.page.ts");








var routes = [
    {
        path: '',
        component: _phone_auth_page__WEBPACK_IMPORTED_MODULE_7__["PhoneAuthPage"]
    }
];
var PhoneAuthPageModule = /** @class */ (function () {
    function PhoneAuthPageModule() {
    }
    PhoneAuthPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_5__["IonicSelectableModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_phone_auth_page__WEBPACK_IMPORTED_MODULE_7__["PhoneAuthPage"]]
        })
    ], PhoneAuthPageModule);
    return PhoneAuthPageModule;
}());



/***/ }),

/***/ "./src/pages/login/phone-auth/phone-auth.page.html":
/*!*********************************************************!*\
  !*** ./src/pages/login/phone-auth/phone-auth.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"/login\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Login using Phone Number</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content scroll=\"false\">\n  <ion-list no-margin padding margin-top>\n    <h6>Enter your phone number</h6>\n    <form [formGroup]=\"form\" (ngSubmit)=\"submit()\" novalidate>\n        <ion-row no-padding formGroupName=\"phone\">\n          <ion-col size=\"3\" tappable>\n            <ion-item no-padding tappable>\n              <ion-label position=\"floating\">Country</ion-label>\n              <ionic-selectable\n                [(ngModel)]=\"selected\"\n                searchPlaceholder=\"Search country\"\n                shouldFocusSearchbar=\"true\"\n                headerColor=\"primary\"\n                formControlName=\"area\"\n                [items]=\"phones\"\n                itemValueField=\"callingCode\"\n                itemTextField=\"name\"\n                [canSearch]=\"true\">\n              </ionic-selectable>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"9\">\n              <ion-item no-padding [class.invalid]=\"form.get('phone.tel').invalid\">\n                <ion-label position=\"floating\">Phone Number</ion-label>\n                <ion-input type=\"tel\" placeholder=\"e.g. 8128080xxxx\" pattern=\"[0-9]*\" clearInput formControlName=\"tel\" autocomplete=\"off\" required minlength=\"8\"></ion-input>\n              </ion-item>\n              <div class=\"error\" *ngIf=\"form.get('phone.tel').hasError('required') && (form.get('phone.tel').touched || form.get('phone.tel').dirty)\">Phone is required</div>\n              <div class=\"error\" *ngIf=\"form.get('phone.tel').hasError('minlength') && (form.get('phone.tel').touched || form.get('phone.tel').dirty)\">Phone must be >= 8 characters</div>\n              <div class=\"error\" *ngIf=\"form.get('phone.tel').hasError('maxlength') && (form.get('phone.tel').touched || form.get('phone.tel').dirty)\">Phone number max length 15 characters</div>\n              <div class=\"error\" *ngIf=\"form.get('phone.tel').hasError('pattern') && (form.get('phone.tel').touched || form.get('phone.tel').dirty)\">Phone number must be numeric</div>\n          </ion-col>\n        </ion-row>\n        \n        <div margin-vertical>\n          <ion-button type=\"submit\" shape=\"round\" expand=\"block\" [disabled]=\"form.invalid\">Sign In</ion-button>\n          <div padding-top text-center color=\"dark\">We will send code via SMS</div>\n        </div>\n    </form>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/pages/login/phone-auth/phone-auth.page.scss":
/*!*********************************************************!*\
  !*** ./src/pages/login/phone-auth/phone-auth.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvbG9naW4vcGhvbmUtYXV0aC9waG9uZS1hdXRoLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/pages/login/phone-auth/phone-auth.page.ts":
/*!*******************************************************!*\
  !*** ./src/pages/login/phone-auth/phone-auth.page.ts ***!
  \*******************************************************/
/*! exports provided: PhoneAuthPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneAuthPage", function() { return PhoneAuthPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_services_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/services */ "./src/services/services.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var PhoneAuthPage = /** @class */ (function () {
    function PhoneAuthPage(auth, alert, router, toast, nav, loading, fb, http) {
        this.auth = auth;
        this.alert = alert;
        this.router = router;
        this.toast = toast;
        this.nav = nav;
        this.loading = loading;
        this.fb = fb;
        this.http = http;
        this.phones = [];
        this.form = this.fb.group({
            phone: this.fb.group({
                area: ['+1', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                tel: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]+')]]
            })
        });
    }
    PhoneAuthPage.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('assets/country-calling-codes.min.json').subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                data[i].name = data[i].name + ' (+' + data[i].callingCode + ')';
                _this.phones.push(data[i]);
            }
            _this.selected = _this.phones.filter(function (q) { return q.callingCode === '1'; })[0];
        });
    };
    PhoneAuthPage.prototype.submit = function () {
        var _this = this;
        this.loading.present().then(function () {
            _this.auth.checkPhoneNumber(_this.form.value.phone).then(function () {
                _this.auth.sendSMSVerify(_this.form.value.phone).then(function (res) {
                    _this.loading.dismiss();
                    var param = {
                        queryParams: {
                            phone: JSON.stringify(_this.form.value.phone),
                            verificationId: _this.auth.platform === 'ios' ? res : res.verificationId
                        }
                    };
                    _this.router.navigate(['login/verif-phone'], param);
                }).catch(function (err) {
                    console.log(err);
                    _this.loading.dismiss();
                    _this.toast.showWithClose(err);
                });
            }).catch(function (err) {
                _this.loading.dismiss();
                _this.notRegistered(err);
            });
        });
    };
    PhoneAuthPage.prototype.notRegistered = function (err) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            header: 'Not Registered yet',
                            message: err,
                            buttons: [{
                                    text: 'No',
                                    handler: function () { }
                                }, {
                                    text: 'YES',
                                    handler: function () {
                                        var param = {
                                            queryParams: {
                                                phone: JSON.stringify(_this.form.value.phone),
                                            }
                                        };
                                        _this.router.navigate(['register'], param);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PhoneAuthPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-phone-auth',
            template: __webpack_require__(/*! ./phone-auth.page.html */ "./src/pages/login/phone-auth/phone-auth.page.html"),
            styles: [__webpack_require__(/*! ./phone-auth.page.scss */ "./src/pages/login/phone-auth/phone-auth.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_services_services__WEBPACK_IMPORTED_MODULE_4__["ToastService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"],
            src_services_services__WEBPACK_IMPORTED_MODULE_4__["LoadingService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], PhoneAuthPage);
    return PhoneAuthPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-phone-auth-phone-auth-module.js.map