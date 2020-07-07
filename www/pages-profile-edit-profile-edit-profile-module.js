(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-edit-profile-edit-profile-module"],{

/***/ "./src/pages/profile/edit-profile/edit-profile.module.ts":
/*!***************************************************************!*\
  !*** ./src/pages/profile/edit-profile/edit-profile.module.ts ***!
  \***************************************************************/
/*! exports provided: EditProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-profile.page */ "./src/pages/profile/edit-profile/edit-profile.page.ts");







var routes = [
    {
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"]
    }
];
var EditProfilePageModule = /** @class */ (function () {
    function EditProfilePageModule() {
    }
    EditProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"]]
        })
    ], EditProfilePageModule);
    return EditProfilePageModule;
}());



/***/ }),

/***/ "./src/pages/profile/edit-profile/edit-profile.page.html":
/*!***************************************************************!*\
  !*** ./src/pages/profile/edit-profile/edit-profile.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/profile\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Edit Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div margin-top text-center tappable (click)=\"changeAvatar()\">\n\t\t<div class=\"img\" [ngStyle]=\"{'background-image': 'url(' + (normalize(avatar) || 'assets/img/user.jpg') + ')'}\"></div>\n\t\t<p>Change Avatar</p>\n\t</div>\n\t<ion-list no-margin padding margin-top>\n\t\t<form [formGroup]=\"form\" (ngSubmit)=\"submit()\" autocomplete=\"off\">\n\t\t<ion-item no-padding [class.invalid]=\"form.get('name') && form.get('name').invalid\">\n\t\t\t<ion-label position=\"floating\">Name</ion-label>\n\t\t\t<ion-input #input formControlName=\"name\" name=\"name\" autocomplete=\"off\" [value]=\"auth.user.name\" type=\"text\" required placeholder=\"John Doe\"></ion-input>\n\t\t</ion-item>\n\t\t<div class=\"error\" *ngIf=\"form.get('name') && form.get('name').hasError('required') && (form.get('name').touched || form.get('name').dirty)\">Name is required</div>\n\n\t\t<ion-item no-padding [class.invalid]=\"form.get('dob') && form.get('dob').invalid\">\n\t\t\t<ion-label position=\"floating\">Date of Birth</ion-label>\n\t\t\t<ion-datetime [value]=\"auth.user.dob || '1994-12-15'\" name=\"dob\" displayFormat=\"YYYY-MM-DD\" pickerFormat=\"YYYY-MM-DD\" formControlName=\"dob\" min=\"1950\"></ion-datetime>\n\t\t</ion-item>\n\t\t<div class=\"error\" *ngIf=\"form.get('dob') && form.get('dob').hasError('required') && (form.get('dob').touched || form.get('dob').dirty)\">Date of Birth is required</div>\n\t\t\n\t\t<div margin-top>\n\t\t\t<ion-button type=\"submit\" tappable margin-top shape=\"round\" expand=\"block\" [disabled]=\"form.invalid\">Save</ion-button>\n\t\t</div>\n\t\t</form>\n\t</ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/pages/profile/edit-profile/edit-profile.page.scss":
/*!***************************************************************!*\
  !*** ./src/pages/profile/edit-profile/edit-profile.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  margin: 0 auto;\n  border: 1px solid #ddd; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taXJ6YWlsaGFtaS9Ecm9wYm94L2lvbmljcHJlbWl1bS9hdXRoeTIvc3JjL3BhZ2VzL3Byb2ZpbGUvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2Qsc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL3BhZ2VzL3Byb2ZpbGUvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1ne1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/pages/profile/edit-profile/edit-profile.page.ts":
/*!*************************************************************!*\
  !*** ./src/pages/profile/edit-profile/edit-profile.page.ts ***!
  \*************************************************************/
/*! exports provided: EditProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePage", function() { return EditProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_services_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/services */ "./src/services/services.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");







var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(auth, photo, platform, crop, camera, action, toast, nav, loading, fb) {
        this.auth = auth;
        this.photo = photo;
        this.platform = platform;
        this.crop = crop;
        this.camera = camera;
        this.action = action;
        this.toast = toast;
        this.nav = nav;
        this.loading = loading;
        this.fb = fb;
        this.win = window;
    }
    EditProfilePage.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            name: [this.auth.user.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dob: [this.auth.user.dob]
        });
        this.avatar = this.auth.user.avatar;
    };
    EditProfilePage.prototype.changeAvatar = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.action.create({
                            header: 'Change avatar via gallery or camera',
                            buttons: [{
                                    text: 'Album',
                                    handler: function () {
                                        _this.takeGallery();
                                    }
                                }, {
                                    text: 'Camera',
                                    handler: function () {
                                        _this.takePicture();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditProfilePage.prototype.takeGallery = function () {
        var _this = this;
        var options = { quality: 100, correctOrientation: true, encodingType: this.camera.EncodingType.JPEG, sourceType: this.camera.PictureSourceType.PHOTOLIBRARY, mediaType: this.camera.PictureSourceType.PHOTOLIBRARY };
        this.camera.getPicture(options).then(function (data) {
            _this.crop.crop(data, { quality: 100 }).then(function (newImage) {
                _this.avatar = newImage;
                _this.changePic = true;
            }, function (err) {
                _this.changePic = false;
                console.log(err);
                _this.toast.showWithClose(err);
            });
        }, function (err) {
            console.log(err);
            _this.toast.showWithClose(err);
        });
    };
    EditProfilePage.prototype.takePicture = function () {
        var _this = this;
        var options = { quality: 80, correctOrientation: true, encodingType: this.camera.EncodingType.JPEG };
        this.camera.getPicture(options).then(function (data) {
            _this.crop.crop(data, { quality: 100, targetWidth: 480 }).then(function (newImage) {
                _this.avatar = newImage;
                _this.changePic = true;
            }, function (err) {
                _this.changePic = false;
                console.log(err);
                _this.toast.showWithClose(err);
            });
        }, function (err) {
            console.log(err);
            _this.toast.showWithClose(err);
        });
    };
    EditProfilePage.prototype.normalize = function (url) {
        return this.win.Ionic.WebView.convertFileSrc(url);
    };
    EditProfilePage.prototype.submit = function () {
        var _this = this;
        this.loading.present();
        if (this.changePic) {
            this.photo.uploadImage(this.normalize(this.avatar), "authy/user/" + this.auth.user.uid + ".jpg").then(function (res) {
                var tmp = _this.form.value;
                tmp.avatar = res;
                if (res) {
                    _this.auth.updateProfile(tmp).then(function (q) {
                        _this.loading.dismiss();
                        _this.toast.show(q);
                    }, function (err) {
                        console.log(err);
                        _this.loading.dismiss();
                        _this.toast.showWithClose(err);
                    });
                }
            }, function (err) {
                console.log(err);
                _this.loading.dismiss();
                _this.toast.showWithClose(err.message);
            });
        }
        else {
            this.auth.updateProfile(this.form.value).then(function (q) {
                _this.toast.show(q);
                _this.loading.dismiss();
            }, function (err) {
                console.log(err);
                _this.toast.showWithClose(err);
                _this.loading.dismiss();
            });
        }
    };
    EditProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-profile',
            template: __webpack_require__(/*! ./edit-profile.page.html */ "./src/pages/profile/edit-profile/edit-profile.page.html"),
            styles: [__webpack_require__(/*! ./edit-profile.page.scss */ "./src/pages/profile/edit-profile/edit-profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"], src_services_services__WEBPACK_IMPORTED_MODULE_3__["PhotoLibraryService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_6__["Crop"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"], src_services_services__WEBPACK_IMPORTED_MODULE_3__["ToastService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            src_services_services__WEBPACK_IMPORTED_MODULE_3__["LoadingService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], EditProfilePage);
    return EditProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-profile-edit-profile-edit-profile-module.js.map