(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{ffAp:function(l,n,u){"use strict";u.r(n);var o=u("CcnG"),e=u("gIcY"),t=(u("o+EG"),u("ZZ/e")),i=function(){function l(l,n,u,o,e){this.auth=l,this.toast=n,this.nav=u,this.loading=o,this.fb=e}return l.prototype.ngOnInit=function(){this.form=this.fb.group({email:["",[e.q.required,e.q.email]]})},l.prototype.submit=function(){var l=this;this.loading.present(),console.log(this.form.value.email),this.auth.resetPassword(this.form.value.email).then(function(n){console.log(n),l.form.reset(),l.toast.showWithClose("Password reset link was successfully sent to your email email","success"),l.loading.dismiss()}).catch(function(n){console.log(n),l.toast.showWithClose(n.message),l.loading.dismiss()})},l}(),a=function(){return function(){}}(),r=u("pMnS"),b=u("oBZk"),s=u("Ip0R"),c=u("ZETX"),p=u("DcA+"),d=u("H6TV"),g=o.ob({encapsulation:0,styles:[[""]],data:{}});function f(l){return o.Fb(0,[(l()(),o.qb(0,0,null,null,1,"div",[["class","error"]],null,null,null,null,null)),(l()(),o.Eb(-1,null,["Email is not valid"]))],null,null)}function m(l){return o.Fb(0,[(l()(),o.qb(0,0,null,null,11,"ion-header",[],null,null,null,b.O,b.k)),o.pb(1,49152,null,0,t.B,[o.h,o.k],null,null),(l()(),o.qb(2,0,null,0,9,"ion-toolbar",[["color","primary"]],null,null,null,b.gb,b.C)),o.pb(3,49152,null,0,t.Bb,[o.h,o.k],{color:[0,"color"]},null),(l()(),o.qb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,b.J,b.f)),o.pb(5,49152,null,0,t.l,[o.h,o.k],null,null),(l()(),o.qb(6,0,null,0,2,"ion-back-button",[["defaultHref","/login"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==o.zb(l,8).onClick(u)&&e),e},b.G,b.c)),o.pb(7,49152,null,0,t.g,[o.h,o.k],{defaultHref:[0,"defaultHref"]},null),o.pb(8,16384,null,0,t.h,[[2,t.hb],t.Hb],{defaultHref:[0,"defaultHref"]},null),(l()(),o.qb(9,0,null,0,2,"ion-title",[],null,null,null,b.fb,b.B)),o.pb(10,49152,null,0,t.zb,[o.h,o.k],null,null),(l()(),o.Eb(-1,0,["Forgot Password"])),(l()(),o.qb(12,0,null,null,30,"ion-content",[["padding",""],["scroll","false"]],null,null,null,b.L,b.h)),o.pb(13,49152,null,0,t.u,[o.h,o.k],null,null),(l()(),o.qb(14,0,null,0,28,"ion-list",[["margin-top",""],["no-margin",""],["padding",""]],null,null,null,b.Y,b.t)),o.pb(15,49152,null,0,t.O,[o.h,o.k],null,null),(l()(),o.qb(16,0,null,0,1,"h6",[],null,null,null,null,null)),(l()(),o.Eb(-1,null,["Can't access your account? Please enter your email below, we will send password reset link into your email."])),(l()(),o.qb(18,0,null,0,24,"form",[["autocomplete","off"],["margin-top",""],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(l,n,u){var e=!0,t=l.component;return"submit"===n&&(e=!1!==o.zb(l,20).onSubmit(u)&&e),"reset"===n&&(e=!1!==o.zb(l,20).onReset()&&e),"ngSubmit"===n&&(e=!1!==t.submit()&&e),e},null,null)),o.pb(19,16384,null,0,e.s,[],null,null),o.pb(20,540672,null,0,e.d,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),o.Bb(2048,null,e.a,null,[e.d]),o.pb(22,16384,null,0,e.l,[[4,e.a]],null,null),(l()(),o.qb(23,0,null,null,13,"ion-item",[["no-padding",""]],[[2,"invalid",null]],null,null,b.V,b.p)),o.pb(24,49152,null,0,t.H,[o.h,o.k],null,null),(l()(),o.qb(25,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,b.W,b.s)),o.pb(26,49152,null,0,t.N,[o.h,o.k],{position:[0,"position"]},null),(l()(),o.Eb(-1,0,["Email"])),(l()(),o.qb(28,0,null,0,8,"ion-input",[["autocomplete","off"],["clearInput",""],["formControlName","email"],["placeholder","john@doe.com"],["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==o.zb(l,31)._handleBlurEvent()&&e),"ionChange"===n&&(e=!1!==o.zb(l,31)._handleInputEvent(u.target.value)&&e),e},b.S,b.o)),o.pb(29,16384,null,0,e.p,[],{required:[0,"required"]},null),o.Bb(1024,null,e.h,function(l){return[l]},[e.p]),o.pb(31,16384,null,0,t.Nb,[o.k],null,null),o.Bb(1024,null,e.i,function(l){return[l]},[t.Nb]),o.pb(33,671744,null,0,e.c,[[3,e.a],[6,e.h],[8,null],[6,e.i],[2,e.u]],{name:[0,"name"]},null),o.Bb(2048,null,e.j,null,[e.c]),o.pb(35,16384,null,0,e.k,[[4,e.j]],null,null),o.pb(36,49152,[["input",4]],0,t.G,[o.h,o.k],{autocomplete:[0,"autocomplete"],clearInput:[1,"clearInput"],placeholder:[2,"placeholder"],required:[3,"required"],type:[4,"type"]},null),(l()(),o.hb(16777216,null,null,1,null,f)),o.pb(38,16384,null,0,s.j,[o.P,o.M],{ngIf:[0,"ngIf"]},null),(l()(),o.qb(39,0,null,null,3,"div",[["margin-top",""]],null,null,null,null,null)),(l()(),o.qb(40,0,null,null,2,"ion-button",[["color","secondary"],["expand","block"],["shape","round"],["type","submit"]],null,null,null,b.I,b.e)),o.pb(41,49152,null,0,t.k,[o.h,o.k],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"],shape:[3,"shape"],type:[4,"type"]},null),(l()(),o.Eb(-1,0,["Reset Password"]))],function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,7,0,"/login"),l(n,8,0,"/login"),l(n,20,0,u.form),l(n,26,0,"floating"),l(n,29,0,""),l(n,33,0,"email"),l(n,36,0,"off","","john@doe.com","","email"),l(n,38,0,u.form.get("email").invalid&&(u.form.get("email").touched||u.form.get("email").dirty)),l(n,41,0,"secondary",u.form.invalid,"block","round","submit")},function(l,n){var u=n.component;l(n,18,0,o.zb(n,22).ngClassUntouched,o.zb(n,22).ngClassTouched,o.zb(n,22).ngClassPristine,o.zb(n,22).ngClassDirty,o.zb(n,22).ngClassValid,o.zb(n,22).ngClassInvalid,o.zb(n,22).ngClassPending),l(n,23,0,u.form.get("email").invalid),l(n,28,0,o.zb(n,29).required?"":null,o.zb(n,35).ngClassUntouched,o.zb(n,35).ngClassTouched,o.zb(n,35).ngClassPristine,o.zb(n,35).ngClassDirty,o.zb(n,35).ngClassValid,o.zb(n,35).ngClassInvalid,o.zb(n,35).ngClassPending)})}function h(l){return o.Fb(0,[(l()(),o.qb(0,0,null,null,1,"app-forgot-pass",[],null,null,null,m,g)),o.pb(1,114688,null,0,i,[c.a,p.a,t.Hb,d.a,e.b],null,null)],function(l,n){l(n,1,0)},null)}var v=o.mb("app-forgot-pass",i,h,{},{},[]),k=u("ZYCi");u.d(n,"ForgotPassPageModuleNgFactory",function(){return q});var q=o.nb(a,[],function(l){return o.wb([o.xb(512,o.j,o.cb,[[8,[r.a,v]],[3,o.j],o.x]),o.xb(4608,s.l,s.k,[o.u,[2,s.u]]),o.xb(4608,e.t,e.t,[]),o.xb(4608,e.b,e.b,[]),o.xb(4608,t.c,t.c,[o.z,o.g]),o.xb(4608,t.Gb,t.Gb,[t.c,o.j,o.q,s.c]),o.xb(4608,t.Kb,t.Kb,[t.c,o.j,o.q,s.c]),o.xb(1073742336,s.b,s.b,[]),o.xb(1073742336,e.r,e.r,[]),o.xb(1073742336,e.f,e.f,[]),o.xb(1073742336,e.o,e.o,[]),o.xb(1073742336,t.Db,t.Db,[]),o.xb(1073742336,k.o,k.o,[[2,k.u],[2,k.m]]),o.xb(1073742336,a,a,[]),o.xb(1024,k.k,function(){return[[{path:"",component:i}]]},[])])})}}]);