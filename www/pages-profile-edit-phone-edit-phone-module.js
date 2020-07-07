(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-edit-phone-edit-phone-module"],{

/***/ "./src/pages/profile/edit-phone/edit-phone.module.ts":
/*!***********************************************************!*\
  !*** ./src/pages/profile/edit-phone/edit-phone.module.ts ***!
  \***********************************************************/
/*! exports provided: EditPhonePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPhonePageModule", function() { return EditPhonePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _edit_phone_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-phone.page */ "./src/pages/profile/edit-phone/edit-phone.page.ts");








var routes = [
    {
        path: '',
        component: _edit_phone_page__WEBPACK_IMPORTED_MODULE_7__["EditPhonePage"]
    }
];
var EditPhonePageModule = /** @class */ (function () {
    function EditPhonePageModule() {
    }
    EditPhonePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_5__["IonicSelectableModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_edit_phone_page__WEBPACK_IMPORTED_MODULE_7__["EditPhonePage"]]
        })
    ], EditPhonePageModule);
    return EditPhonePageModule;
}());



/***/ }),

/***/ "./src/pages/profile/edit-phone/edit-phone.page.html":
/*!***********************************************************!*\
  !*** ./src/pages/profile/edit-phone/edit-phone.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button routerDirection=\"backward\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{auth.user.phone ? 'Edit' : 'Add'}} Phone Number</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list-header *ngIf=\"auth.user.phone\">\n    <ion-label>Current phone: {{auth.user.phone}}</ion-label>\n  </ion-list-header>\n  <ion-list no-margin padding>\n    <h6>Please enter your new phone number.</h6>\n    <form [formGroup]=\"form\" (ngSubmit)=\"submit()\" novalidate>\n        <ion-row no-padding formGroupName=\"phone\">\n          <ion-col size=\"3\" tappable>\n            <ion-item no-padding tappable>\n              <ion-label position=\"floating\">Country</ion-label>\n              <ionic-selectable\n                [(ngModel)]=\"selected\"\n                searchPlaceholder=\"Search country\"\n                shouldFocusSearchbar=\"true\"\n                headerColor=\"primary\"\n                formControlName=\"area\"\n                [items]=\"phones\"\n                itemValueField=\"callingCode\"\n                itemTextField=\"name\"\n                [canSearch]=\"true\">\n              </ionic-selectable>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"9\">\n              <ion-item no-padding [class.invalid]=\"form.get('phone.tel').invalid\">\n                <ion-label position=\"floating\">New Phone Number</ion-label>\n                <ion-input type=\"tel\" placeholder=\"e.g. 8128080xxxx\" pattern=\"[0-9]*\" clearInput formControlName=\"tel\" autocomplete=\"off\" required minlength=\"8\"></ion-input>\n              </ion-item>\n              <div class=\"error\" *ngIf=\"form.get('phone.tel').hasError('required') && (form.get('phone.tel').touched || form.get('phone.tel').dirty)\">Phone is required</div>\n              <div class=\"error\" *ngIf=\"form.get('phone.tel').hasError('minlength') && (form.get('phone.tel').touched || form.get('phone.tel').dirty)\">Phone must be >= 8 characters</div>\n              <div class=\"error\" *ngIf=\"form.get('phone.tel').hasError('maxlength') && (form.get('phone.tel').touched || form.get('phone.tel').dirty)\">Phone number max length 15 characters</div>\n              <div class=\"error\" *ngIf=\"form.get('phone.tel').hasError('pattern') && (form.get('phone.tel').touched || form.get('phone.tel').dirty)\">Phone number must be numeric</div>\n          </ion-col>\n        </ion-row>\n        \n        <div margin-vertical>\n          <ion-button type=\"submit\" shape=\"round\" expand=\"block\" [disabled]=\"form.invalid\">Save</ion-button>\n          <div padding-top text-center color=\"dark\">We will send code via SMS</div>\n        </div>\n    </form>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/pages/profile/edit-phone/edit-phone.page.scss":
/*!***********************************************************!*\
  !*** ./src/pages/profile/edit-phone/edit-phone.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-list-header {\n  --background: var(--ion-color-secondary);\n  color: white !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taXJ6YWlsaGFtaS9Ecm9wYm94L2lvbmljcHJlbWl1bS9hdXRoeTIvc3JjL3BhZ2VzL3Byb2ZpbGUvZWRpdC1waG9uZS9lZGl0LXBob25lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdDQUFhO0VBQ2IsdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL3BhZ2VzL3Byb2ZpbGUvZWRpdC1waG9uZS9lZGl0LXBob25lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1saXN0LWhlYWRlcntcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50OyBcbn0iXX0= */"

/***/ }),

/***/ "./src/pages/profile/edit-phone/edit-phone.page.ts":
/*!*********************************************************!*\
  !*** ./src/pages/profile/edit-phone/edit-phone.page.ts ***!
  \*********************************************************/
/*! exports provided: EditPhonePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPhonePage", function() { return EditPhonePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/services/services */ "./src/services/services.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var EditPhonePage = /** @class */ (function () {
    function EditPhonePage(auth, param, router, toast, loading, fb, http) {
        this.auth = auth;
        this.param = param;
        this.router = router;
        this.toast = toast;
        this.loading = loading;
        this.fb = fb;
        this.http = http;
        this.phones = [];
    }
    EditPhonePage.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('assets/country-calling-codes.min.json').subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                data[i].name = data[i].name + ' (+' + data[i].callingCode + ')';
                _this.phones.push(data[i]);
            }
            _this.selected = _this.phones.filter(function (q) { return q.callingCode === '1'; })[0];
        });
        this.form = this.fb.group({
            phone: this.fb.group({
                area: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
                tel: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]+')]]
            })
        });
    };
    EditPhonePage.prototype.submit = function () {
        var _this = this;
        console.log(this.form.value);
        if (this.auth.user.phone === '+' + this.form.value.phone.area.callingCode + this.form.value.phone.tel) {
            this.toast.showWithClose('New phone number can not be same as previous phone number');
        }
        else {
            this.loading.present();
            this.auth.sendSMSVerify(this.form.value.phone).then(function (res) {
                _this.loading.dismiss();
                var param = {
                    queryParams: {
                        action: 'update',
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
        }
    };
    EditPhonePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-phone',
            template: __webpack_require__(/*! ./edit-phone.page.html */ "./src/pages/profile/edit-phone/edit-phone.page.html"),
            styles: [__webpack_require__(/*! ./edit-phone.page.scss */ "./src/pages/profile/edit-phone/edit-phone.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_services_services__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
            src_services_services__WEBPACK_IMPORTED_MODULE_4__["LoadingService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], EditPhonePage);
    return EditPhonePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-profile-edit-phone-edit-phone-module.js.map