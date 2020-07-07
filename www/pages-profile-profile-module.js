(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./src/pages/profile/profile.module.ts":
/*!*********************************************!*\
  !*** ./src/pages/profile/profile.module.ts ***!
  \*********************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/pages/profile/profile.page.ts");







var routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]
    }
];
var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());



/***/ }),

/***/ "./src/pages/profile/profile.page.html":
/*!*********************************************!*\
  !*** ./src/pages/profile/profile.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n\t\t<ion-item lines=\"none\" class=\"profile\" color=\"primary\">\n\t\t\t<ion-avatar slot=\"start\" tappable>\n\t\t\t\t<div class=\"img_wrapper\">\n\t\t\t\t\t<div class=\"default\"></div>\n\t\t\t\t\t<div class=\"img\" [ngStyle]=\"{'background-image': 'url(' + (normalize(auth.user.avatar) || 'assets/img/user.jpg') + ')'}\"></div>\n\t\t\t\t</div>\n      </ion-avatar>\n      <ion-label text-wrap>\n        <h3>{{auth.user.name}}</h3>\n        <p>{{auth.user.email}}</p>\n      </ion-label>\n      <span *ngIf=\"auth.user.phone\" slot=\"end\" tappable><b>{{auth.user.phone}}</b></span>\n\t\t</ion-item>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list margin-top>\n      <ion-item tappable routerLink=\"/tabs/profile/edit-profile\" routerDirection=\"forward\" detail=\"true\">\n        <ion-label>Edit Profile</ion-label>\n      </ion-item>\n      <ion-item tappable routerLink=\"/tabs/profile/edit-email\" routerDirection=\"forward\" detail=\"true\">\n        <ion-label>Edit Email</ion-label>\n      </ion-item>\n      <ion-item tappable routerLink=\"/tabs/profile/edit-password\" routerDirection=\"forward\" detail=\"true\">\n        <ion-label>Edit Password</ion-label>\n      </ion-item>\n      <ion-item *ngIf=\"auth.user.phone\" tappable routerLink=\"/tabs/profile/edit-phone\" routerDirection=\"forward\" detail=\"true\">\n        <ion-label>Edit Phone Number</ion-label>\n      </ion-item>\n    </ion-list>\n\n    <ion-list>\n      <ion-item (click)=\"logout()\" lines=\"none\" detail=\"false\">\n        <ion-label>Log Out</ion-label>\n      </ion-item>\n      \n      <p text-center style=\"color: grey;\">&copy; 2019 Authy <br>v4</p>\n    </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/pages/profile/profile.page.scss":
/*!*********************************************!*\
  !*** ./src/pages/profile/profile.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img {\n  background-size: contain;\n  width: 40px;\n  height: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taXJ6YWlsaGFtaS9Ecm9wYm94L2lvbmljcHJlbWl1bS9hdXRoeTIvc3JjL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBd0I7RUFDeEIsV0FBVztFQUNYLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWd7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/pages/profile/profile.page.ts":
/*!*******************************************!*\
  !*** ./src/pages/profile/profile.page.ts ***!
  \*******************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_services_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/services */ "./src/services/services.ts");




var ProfilePage = /** @class */ (function () {
    function ProfilePage(alert, nav, auth, loading) {
        this.alert = alert;
        this.nav = nav;
        this.auth = auth;
        this.loading = loading;
        this.win = window;
    }
    ProfilePage.prototype.ngOnInit = function () {
    };
    ProfilePage.prototype.normalize = function (url) {
        return this.auth.platform === 'cordova' ? this.win.Ionic.WebView.convertFileSrc(url) : url;
    };
    ProfilePage.prototype.logout = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            header: 'Log Out',
                            message: 'Are you sure want to logout?',
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'cancel',
                                    handler: function () { }
                                },
                                {
                                    text: 'Yes',
                                    handler: function () {
                                        _this.loading.present().then(function () {
                                            _this.auth.logout().then(function () {
                                                _this.loading.dismiss().then(function () {
                                                    _this.nav.navigateRoot(['login']);
                                                });
                                            });
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
    ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.page.html */ "./src/pages/profile/profile.page.html"),
            styles: [__webpack_require__(/*! ./profile.page.scss */ "./src/pages/profile/profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_services_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"], src_services_services__WEBPACK_IMPORTED_MODULE_3__["LoadingService"]])
    ], ProfilePage);
    return ProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module.js.map