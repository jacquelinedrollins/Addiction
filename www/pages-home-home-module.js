(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./src/pages/home/home.module.ts":
/*!***************************************!*\
  !*** ./src/pages/home/home.module.ts ***!
  \***************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/pages/home/home.page.ts");







var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
    }
];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/pages/home/home.page.html":
/*!***************************************!*\
  !*** ./src/pages/home/home.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      Welcome to Authy\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div padding>\n    <p>Hi {{auth.user.name}}, this will be your dashbord here. To manage your account, go to Profile tab.</p>\n    <p>With Authy, you can learn how to manage multiple linked account using Firebase Authentication.</p>\n    <p>Thanks for trying this app and hope you enjoy it!</p>\n  </div>\n\n  <ion-list>\n    <ion-item-divider><ion-label>Email</ion-label></ion-item-divider>\n    <ion-item>\n      <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\n      <ion-label>{{auth.user.email}}</ion-label>\n      <ion-badge *ngIf=\"auth.user.emailVerified\" slot=\"end\" color=\"success\">Verified</ion-badge>\n      <ion-button *ngIf=\"!auth.user.emailVerified\" slot=\"end\" fill=\"outline\" tappable (click)=\"verifyEmail()\">\n        Verify Email\n      </ion-button>\n    </ion-item>\n\n    <ion-item-divider margin-top><ion-label>Phone</ion-label></ion-item-divider>\n    <ion-item>\n      <ion-icon name=\"call\" slot=\"start\"></ion-icon>\n      <ion-label *ngIf=\"auth.user.phone; else nophone\">{{auth.user.phone}}</ion-label>\n      <ng-template #nophone><ion-label>No phone available</ion-label></ng-template>\n      <ion-badge *ngIf=\"auth.user.phone\" slot=\"end\" color=\"success\">Verified</ion-badge>\n      <ion-button *ngIf=\"!auth.user.phone\" slot=\"end\" fill=\"outline\" tappable routerLink=\"/tabs/profile/edit-phone\" routerDirection=\"forward\">\n        Add Phone\n      </ion-button>\n    </ion-item>\n\n    <ion-item-divider margin-top><ion-label>Social Account</ion-label></ion-item-divider>\n    <ion-item>\n      <ion-icon name=\"logo-facebook\" slot=\"start\"></ion-icon>\n      <ion-label>Facebook {{auth.user.facebook ? '(' + auth.user.facebook.name + ')' : ''}}</ion-label>\n      <ion-button [color]=\"auth.user.facebook ? 'danger' : ''\" tappable size=\"small\" (click)=\"connectFB()\" slot=\"end\" [fill]=\"auth.user.facebook ? 'solid' : 'outline'\">\n        <ion-icon slot=\"start\" [name]=\"auth.user.facebook ? 'remove-circle' : 'link'\"></ion-icon> {{auth.user.facebook ? 'Unlink' : 'Link'}}\n      </ion-button>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"logo-google\" slot=\"start\"></ion-icon>\n      <ion-label>Google {{auth.user.google ? '(' + (auth.user.google.name || auth.user.google.email) + ')' : ''}}</ion-label>\n      <ion-button [color]=\"auth.user.google ? 'danger' : ''\" tappable size=\"small\" (click)=\"connectGG()\" slot=\"end\" [fill]=\"auth.user.google ? 'solid' : 'outline'\">\n        <ion-icon slot=\"start\" [name]=\"auth.user.google ? 'remove-circle' : 'link'\"></ion-icon> {{auth.user.google ? 'Unlink' : 'Link'}}\n      </ion-button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/pages/home/home.page.scss":
/*!***************************************!*\
  !*** ./src/pages/home/home.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/pages/home/home.page.ts":
/*!*************************************!*\
  !*** ./src/pages/home/home.page.ts ***!
  \*************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/services */ "./src/services/services.ts");





var HomePage = /** @class */ (function () {
    function HomePage(auth, router, alert, loading, toast) {
        this.auth = auth;
        this.router = router;
        this.alert = alert;
        this.loading = loading;
        this.toast = toast;
        console.log(this.auth.user);
    }
    HomePage.prototype.verifyEmail = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            header: 'Email Verification',
                            message: 'Are you sure want to verify your email?',
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    handler: function () { }
                                },
                                {
                                    text: 'Yes',
                                    handler: function () {
                                        _this.loading.present();
                                        _this.auth.sendEmailConfirm(_this.auth.user).then(function (res) {
                                            _this.toast.showWithClose(res);
                                            _this.loading.dismiss();
                                        });
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
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.prototype.connectFB = function () {
        var _this = this;
        if (this.auth.user.facebook) {
            this.auth.unlink('facebook.com').then(function (res) {
                _this.toast.show(res);
            }).catch(function (err) {
                _this.toast.showWithClose(err);
            });
        }
        else {
            this.loading.present().then(function () {
                _this.auth.loginByFb().then(function (res) {
                    _this.loading.dismiss();
                    _this.toast.show(res);
                }).catch(function (err) {
                    console.log(err);
                    _this.loading.dismiss();
                    _this.toast.showWithClose(err.message || err.errorMessage);
                });
            });
        }
    };
    HomePage.prototype.connectGG = function () {
        var _this = this;
        if (this.auth.user.google) {
            this.auth.unlink('google.com').then(function (res) {
                _this.toast.show(res);
            }).catch(function (err) {
                _this.toast.showWithClose(err);
            });
        }
        else {
            this.loading.present().then(function () {
                _this.auth.loginByGG().then(function (res) {
                    _this.loading.dismiss();
                    _this.toast.show(res);
                }).catch(function (err) {
                    console.log(err);
                    _this.loading.dismiss();
                    _this.toast.showWithClose(err.message || err.errorMessage);
                });
            });
        }
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/pages/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _services_services__WEBPACK_IMPORTED_MODULE_4__["LoadingService"], _services_services__WEBPACK_IMPORTED_MODULE_4__["ToastService"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map