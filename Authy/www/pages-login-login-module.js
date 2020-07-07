(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/pages/login/login.module.ts":
/*!*****************************************!*\
  !*** ./src/pages/login/login.module.ts ***!
  \*****************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "./src/pages/login/login.page.ts");






var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/pages/login/login.page.html":
/*!*****************************************!*\
  !*** ./src/pages/login/login.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border hideBackButton=\"true\" transparent></ion-header>\n\n<ion-content padding>\n\t<div>\n\t\t<span class=\"img\" style=\"background-image: url('assets/img/logo.png')\"></span>\n\t</div>\n</ion-content>\n\n<ion-footer text-center no-border scroll=\"false\">\n  <div class=\"footer-content\" padding>\n\t<ion-button tappable (click)=\"loginFB()\" expand=\"block\" shape=\"round\" text-center color=\"tertiary\" icon-start> <ion-icon name=\"logo-facebook\"></ion-icon> Login with Facebook </ion-button>\n\t<ion-button tappable (click)=\"loginGoogle()\" expand=\"block\" shape=\"round\" text-center color=\"danger\" icon-start> <ion-icon name=\"logo-google\"></ion-icon> Login with Google </ion-button>\n\t<ion-button tappable routerLink=\"/login/phone\" routerDirection=\"forward\" color=\"primary\" text-center expand=\"block\" shape=\"round\" icon-start> <ion-icon name=\"phone-portrait\"></ion-icon> Login with Phone</ion-button>\n\t<ion-button tappable routerLink=\"/login/email\" routerDirection=\"forward\" color=\"secondary\" text-center expand=\"block\" shape=\"round\" icon-start> <ion-icon name=\"mail\"></ion-icon> Login with Email</ion-button>\n\t<ion-button tappable routerLink=\"/register\" routerDirection=\"forward\" text-center expand=\"block\" fill=\"clear\">Don't have account? Sign Up now </ion-button>\n  </div>  \n</ion-footer>\n"

/***/ }),

/***/ "./src/pages/login/login.page.scss":
/*!*****************************************!*\
  !*** ./src/pages/login/login.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img {\n  width: 100%;\n  height: 185px;\n  display: block;\n  background-size: contain;\n  margin: 70px auto;\n  background-repeat: no-repeat; }\n\n[icon-start] ion-icon {\n  position: absolute;\n  left: 35px; }\n\nion-footer {\n  box-shadow: none;\n  border: none; }\n\nion-footer button {\n  margin-bottom: 10px !important; }\n\n> ion-content {\n  background: linear-gradient(316deg, #bf4593, #0d466e, #0e5fac, #f53d3d, #39466B, #6faa29);\n  background-size: 1800% 1800%;\n  -webkit-animation: rainbow 20s linear infinite;\n          animation: rainbow 20s linear infinite; }\n\nion-content:after {\n  display: block;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  right: 0;\n  top: 0; }\n\n@-webkit-keyframes rainbow {\n  0% {\n    background-position: 0% 0%; }\n  50% {\n    background-position: 100% 100%; }\n  100% {\n    background-position: 0% 0%; } }\n\n@keyframes rainbow {\n  0% {\n    background-position: 0% 0%; }\n  50% {\n    background-position: 100% 100%; }\n  100% {\n    background-position: 0% 0%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taXJ6YWlsaGFtaS9Ecm9wYm94L2lvbmljcHJlbWl1bS9hdXRoeTIvc3JjL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNyYy9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLDRCQUE0QixFQUFBOztBQ0VoQztFRENJLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBRWQ7RUFDSSxnQkFBZ0I7RUFDaEIsWUFBVyxFQUFBOztBQUVmO0VBQ0ksOEJBQThCLEVBQUE7O0FDRWxDO0VERUkseUZBQXlGO0VBQ3pGLDRCQUE0QjtFQUM1Qiw4Q0FBc0M7VUFBdEMsc0NBQXNDLEVBQUE7O0FBRTFDO0VBRUksY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osT0FBTztFQUFFLFFBQVE7RUFBRSxNQUFNLEVBQUE7O0FBRTdCO0VBQ0k7SUFDSSwwQkFDSixFQUFBO0VBQ0E7SUFDSSw4QkFDSixFQUFBO0VBQ0E7SUFDSSwwQkFDSixFQUFBLEVBQUE7O0FBVEo7RUFDSTtJQUNJLDBCQUNKLEVBQUE7RUFDQTtJQUNJLDhCQUNKLEVBQUE7RUFDQTtJQUNJLDBCQUNKLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE4NXB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBtYXJnaW46IDcwcHggYXV0bztcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuW2ljb24tc3RhcnRdIGlvbi1pY29ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAzNXB4O1xufVxuaW9uLWZvb3RlcntcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlcjpub25lO1xufVxuaW9uLWZvb3RlciBidXR0b257XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xufVxuXG4+IGlvbi1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE2ZGVnLCAjYmY0NTkzLCAjMGQ0NjZlLCAjMGU1ZmFjLCAjZjUzZDNkLCAjMzk0NjZCLCAjNmZhYTI5KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE4MDAlIDE4MDAlO1xuICAgIGFuaW1hdGlvbjogcmFpbmJvdyAyMHMgbGluZWFyIGluZmluaXRlO1xufVxuaW9uLWNvbnRlbnQ6YWZ0ZXJ7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvaW1nL2JnLmpwZWcnKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbGVmdDogMDsgcmlnaHQ6IDA7IHRvcDogMDtcbn1cbkBrZXlmcmFtZXMgcmFpbmJvdyB7XG4gICAgMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAwJVxuICAgIH1cbiAgICA1MCUge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDEwMCVcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDAlXG4gICAgfVxufSIsIi5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxODVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgbWFyZ2luOiA3MHB4IGF1dG87XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IH1cblxuW2ljb24tc3RhcnRdIGlvbi1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAzNXB4OyB9XG5cbmlvbi1mb290ZXIge1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IG5vbmU7IH1cblxuaW9uLWZvb3RlciBidXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7IH1cblxuPiBpb24tY29udGVudCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTZkZWcsICNiZjQ1OTMsICMwZDQ2NmUsICMwZTVmYWMsICNmNTNkM2QsICMzOTQ2NkIsICM2ZmFhMjkpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDE4MDAlIDE4MDAlO1xuICBhbmltYXRpb246IHJhaW5ib3cgMjBzIGxpbmVhciBpbmZpbml0ZTsgfVxuXG5pb24tY29udGVudDphZnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwOyB9XG5cbkBrZXlmcmFtZXMgcmFpbmJvdyB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAwJTsgfVxuICA1MCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMTAwJTsgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAwJTsgfSB9XG4iXX0= */"

/***/ }),

/***/ "./src/pages/login/login.page.ts":
/*!***************************************!*\
  !*** ./src/pages/login/login.page.ts ***!
  \***************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/services */ "./src/services/services.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ "./node_modules/@ionic-native/app-version/ngx/index.js");






var LoginPage = /** @class */ (function () {
    function LoginPage(plt, router, auth, apv, alert, nav, toast, loading) {
        this.plt = plt;
        this.router = router;
        this.auth = auth;
        this.apv = apv;
        this.alert = alert;
        this.nav = nav;
        this.toast = toast;
        this.loading = loading;
    }
    LoginPage.prototype.ngOnInit = function () {
        if (this.plt.is('cordova')) {
            this.apv.getVersionNumber().then(function (res) {
                console.log(res);
            });
        }
        else {
            console.log(' no cordova');
        }
    };
    LoginPage.prototype.loginFB = function () {
        var _this = this;
        this.loading.present().then(function () {
            _this.auth.loginByFb().then(function () {
                _this.loading.dismiss();
                _this.nav.navigateRoot('tabs');
            }, function (err) {
                console.log(err);
                _this.loading.dismiss();
                switch (err.code) {
                    case 'auth/account-exists-with-different-credential':
                        _this.showConfirm(err);
                        break;
                    default:
                        _this.toast.showWithClose(err.message || err.errorMessage);
                        break;
                }
            });
        });
    };
    LoginPage.prototype.loginGoogle = function () {
        var _this = this;
        this.loading.present().then(function () {
            _this.auth.loginByGG().then(function (res) {
                _this.loading.dismiss();
                _this.toast.show(res);
                _this.nav.navigateRoot('tabs');
            }, function (err) {
                console.log(err);
                _this.loading.dismiss();
                switch (err.code) {
                    case 'auth/account-exists-with-different-credential':
                        _this.showConfirm(err);
                        break;
                    default:
                        _this.toast.showWithClose(err.message || err.errorMessage);
                        break;
                }
            });
        });
    };
    LoginPage.prototype.showConfirm = function (err) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            header: 'Email Exist',
                            message: err.message,
                            buttons: [{
                                    text: 'Ignore',
                                    handler: function () {
                                        // this.toast.showWithClose('You cancel login process');
                                    }
                                }, {
                                    text: 'OK Go Ahead',
                                    handler: function () {
                                        if (err.method === 'facebook.com') {
                                            _this.loginFB();
                                        }
                                        else if (err.method === 'google.com') {
                                            _this.loginGoogle();
                                        }
                                        else if (err.method === 'password') {
                                            // this.nav.navigateRoot('login/email');
                                            var param = {
                                                queryParams: {
                                                    email: err.email
                                                }
                                            };
                                            _this.router.navigate(['login/email'], param);
                                        }
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
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_services_services__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_5__["AppVersion"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], src_services_services__WEBPACK_IMPORTED_MODULE_2__["ToastService"], src_services_services__WEBPACK_IMPORTED_MODULE_2__["LoadingService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map