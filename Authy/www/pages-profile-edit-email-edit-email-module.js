(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-edit-email-edit-email-module"],{

/***/ "./src/pages/profile/edit-email/edit-email.module.ts":
/*!***********************************************************!*\
  !*** ./src/pages/profile/edit-email/edit-email.module.ts ***!
  \***********************************************************/
/*! exports provided: EditEmailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEmailPageModule", function() { return EditEmailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_email_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-email.page */ "./src/pages/profile/edit-email/edit-email.page.ts");







var routes = [
    {
        path: '',
        component: _edit_email_page__WEBPACK_IMPORTED_MODULE_6__["EditEmailPage"]
    }
];
var EditEmailPageModule = /** @class */ (function () {
    function EditEmailPageModule() {
    }
    EditEmailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_email_page__WEBPACK_IMPORTED_MODULE_6__["EditEmailPage"]]
        })
    ], EditEmailPageModule);
    return EditEmailPageModule;
}());



/***/ }),

/***/ "./src/pages/profile/edit-email/edit-email.page.html":
/*!***********************************************************!*\
  !*** ./src/pages/profile/edit-email/edit-email.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/profile\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Edit Email</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list-header>\n    <ion-label>Current email: {{auth.user.email}}</ion-label>\n  </ion-list-header>\n  <ion-list no-margin padding>\n    <h6>Please enter your new email and then your current password to reauthenticate and update new email.</h6>\n    <form [formGroup]=\"form\" (ngSubmit)=\"submit()\" novalidate>\n        <ion-item no-padding [class.invalid]=\"form.get('email').invalid\">\n          <ion-label position=\"floating\">New Email</ion-label>\n          <ion-input #input formControlName=\"email\" autocomplete=\"off\" type=\"email\" required></ion-input>\n        </ion-item>\n        <div class=\"error\" *ngIf=\"form.get('email').invalid && (form.get('email').touched || form.get('email').dirty)\">Email is not valid</div>\n        \n        <ion-item no-padding [class.invalid]=\"form.get('pass').invalid\">\n          <ion-label position=\"floating\">Password</ion-label>\n          <ion-input formControlName=\"pass\" autocomplete=\"off\" type=\"password\" minlength=\"6\" required></ion-input>\n        </ion-item>\n        <div class=\"error\" *ngIf=\"form.get('pass').hasError('required') && (form.get('pass').touched || form.get('pass').dirty)\">Password is required</div>\n        <div class=\"error\" *ngIf=\"form.get('pass').hasError('minlength') && (form.get('pass').touched || form.get('pass').dirty)\">Password length must be >= 6 </div>\n\n        <div margin-vertical>\n          <ion-button type=\"submit\" shape=\"round\" expand=\"block\" [disabled]=\"form.invalid\">Save</ion-button>\n        </div>\n    </form>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/pages/profile/edit-email/edit-email.page.scss":
/*!***********************************************************!*\
  !*** ./src/pages/profile/edit-email/edit-email.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-list-header {\n  --background: var(--ion-color-secondary);\n  color: white !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taXJ6YWlsaGFtaS9Ecm9wYm94L2lvbmljcHJlbWl1bS9hdXRoeTIvc3JjL3BhZ2VzL3Byb2ZpbGUvZWRpdC1lbWFpbC9lZGl0LWVtYWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdDQUFhO0VBQ2IsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL3BhZ2VzL3Byb2ZpbGUvZWRpdC1lbWFpbC9lZGl0LWVtYWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1saXN0LWhlYWRlcntcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50OyBcbn0iXX0= */"

/***/ }),

/***/ "./src/pages/profile/edit-email/edit-email.page.ts":
/*!*********************************************************!*\
  !*** ./src/pages/profile/edit-email/edit-email.page.ts ***!
  \*********************************************************/
/*! exports provided: EditEmailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditEmailPage", function() { return EditEmailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_services_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/services */ "./src/services/services.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var EditEmailPage = /** @class */ (function () {
    function EditEmailPage(auth, toast, nav, loading, fb) {
        this.auth = auth;
        this.toast = toast;
        this.nav = nav;
        this.loading = loading;
        this.fb = fb;
    }
    EditEmailPage.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            pass: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
        });
    };
    EditEmailPage.prototype.submit = function () {
        var _this = this;
        console.log(this.form.value);
        this.loading.present();
        this.auth.updateEmail(this.form.value).then(function (res) {
            _this.loading.dismiss();
            _this.toast.show(res);
            _this.form.reset();
        }).catch(function (err) {
            console.log(err);
            _this.toast.showWithClose(err);
            _this.loading.dismiss();
        });
    };
    EditEmailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-email',
            template: __webpack_require__(/*! ./edit-email.page.html */ "./src/pages/profile/edit-email/edit-email.page.html"),
            styles: [__webpack_require__(/*! ./edit-email.page.scss */ "./src/pages/profile/edit-email/edit-email.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_services__WEBPACK_IMPORTED_MODULE_3__["AuthService"], src_services_services__WEBPACK_IMPORTED_MODULE_3__["ToastService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            src_services_services__WEBPACK_IMPORTED_MODULE_3__["LoadingService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], EditEmailPage);
    return EditEmailPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-profile-edit-email-edit-email-module.js.map