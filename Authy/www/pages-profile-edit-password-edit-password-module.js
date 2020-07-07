(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-edit-password-edit-password-module"],{

/***/ "./src/pages/profile/edit-password/edit-password.module.ts":
/*!*****************************************************************!*\
  !*** ./src/pages/profile/edit-password/edit-password.module.ts ***!
  \*****************************************************************/
/*! exports provided: EditPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPasswordPageModule", function() { return EditPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-password.page */ "./src/pages/profile/edit-password/edit-password.page.ts");







var routes = [
    {
        path: '',
        component: _edit_password_page__WEBPACK_IMPORTED_MODULE_6__["EditPasswordPage"]
    }
];
var EditPasswordPageModule = /** @class */ (function () {
    function EditPasswordPageModule() {
    }
    EditPasswordPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_password_page__WEBPACK_IMPORTED_MODULE_6__["EditPasswordPage"]]
        })
    ], EditPasswordPageModule);
    return EditPasswordPageModule;
}());



/***/ }),

/***/ "./src/pages/profile/edit-password/edit-password.page.html":
/*!*****************************************************************!*\
  !*** ./src/pages/profile/edit-password/edit-password.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button routerDirection=\"backward\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Edit Password</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list no-margin padding>\n\t\t<h6>Please enter your old password and then a new password.</h6>\n\t\t<form [formGroup]=\"form\" (ngSubmit)=\"submit()\" autocomplete=\"off\">\n\t\t\t\n\t\t<ion-item no-padding [class.invalid]=\"form.get('old').invalid\">\n\t\t\t<ion-label position=\"floating\">Old Password</ion-label>\n\t\t\t<ion-input formControlName=\"old\" autocomplete=\"off\" type=\"password\" minlength=\"6\" required></ion-input>\n\t\t</ion-item>\n\t\t<div class=\"error\" *ngIf=\"form.get('old').hasError('required') && (form.get('old').touched || form.get('old').dirty)\">Password is required</div>\n\t\t<div class=\"error\" *ngIf=\"form.get('old').hasError('minlength') && (form.get('old').touched || form.get('old').dirty)\">Password length must be >= 6</div>\n\n\t\t<ion-item no-padding [class.invalid]=\"form.get('pass').invalid\">\n\t\t\t<ion-label position=\"floating\">New Password</ion-label>\n\t\t\t<ion-input formControlName=\"pass\" autocomplete=\"off\" type=\"password\" minlength=\"6\" required></ion-input>\n\t\t</ion-item>\n\t\t<div class=\"error\" *ngIf=\"form.get('pass').hasError('required') && (form.get('pass').touched || form.get('pass').dirty)\">Password is required</div>\n    <div class=\"error\" *ngIf=\"form.get('pass').hasError('minlength') && (form.get('pass').touched || form.get('pass').dirty)\">Password length must be >= 6 </div>\n\n\t\t<ion-item no-padding [class.invalid]=\"form.get('pass2').invalid\">\n\t\t\t<ion-label position=\"floating\">New Password Confirmation</ion-label>\n\t\t\t<ion-input formControlName=\"pass2\" autocomplete=\"off\" type=\"password\" required></ion-input>\n\t\t</ion-item>\n\t\t<div class=\"error\" *ngIf=\"form.get('pass2').hasError('required') && (form.get('pass2').touched || form.get('pass2').dirty)\">Password confirmation is required</div>\n    <div class=\"error\" *ngIf=\"(form.get('pass').value != form.get('pass2').value) && (form.get('pass2').touched || form.get('pass2').dirty)\">Password confirmation is not valid</div>\n\n\t\t<div margin-top>\n\t\t\t<ion-button type=\"submit\" shape=\"round\" expand=\"block\" [disabled]=\"form.invalid || (form.get('pass').value != form.get('pass2').value)\">Save</ion-button>\n\t\t</div>\n\t\t</form>\n\t</ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/pages/profile/edit-password/edit-password.page.scss":
/*!*****************************************************************!*\
  !*** ./src/pages/profile/edit-password/edit-password.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcGFnZXMvcHJvZmlsZS9lZGl0LXBhc3N3b3JkL2VkaXQtcGFzc3dvcmQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/pages/profile/edit-password/edit-password.page.ts":
/*!***************************************************************!*\
  !*** ./src/pages/profile/edit-password/edit-password.page.ts ***!
  \***************************************************************/
/*! exports provided: EditPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPasswordPage", function() { return EditPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_services_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/services */ "./src/services/services.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var EditPasswordPage = /** @class */ (function () {
    function EditPasswordPage(auth, action, toast, nav, loading, fb) {
        this.auth = auth;
        this.action = action;
        this.toast = toast;
        this.nav = nav;
        this.loading = loading;
        this.fb = fb;
    }
    EditPasswordPage.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            old: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            pass: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            pass2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    };
    EditPasswordPage.prototype.submit = function () {
        var _this = this;
        console.log(this.form.value);
        this.loading.present();
        this.auth.updatePass(this.form.value.old, this.form.value.pass).then(function (res) {
            _this.loading.dismiss();
            _this.toast.show(res);
            _this.form.reset();
        }).catch(function (err) {
            console.log(err);
            _this.toast.showWithClose(err);
            _this.loading.dismiss();
        });
    };
    EditPasswordPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-password',
            template: __webpack_require__(/*! ./edit-password.page.html */ "./src/pages/profile/edit-password/edit-password.page.html"),
            styles: [__webpack_require__(/*! ./edit-password.page.scss */ "./src/pages/profile/edit-password/edit-password.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"], src_services_services__WEBPACK_IMPORTED_MODULE_3__["ToastService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            src_services_services__WEBPACK_IMPORTED_MODULE_3__["LoadingService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], EditPasswordPage);
    return EditPasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-profile-edit-password-edit-password-module.js.map