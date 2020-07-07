import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '', loadChildren: '../pages/tabs/tabs.module#TabsPageModule'},
  { path: 'login', loadChildren: '../pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: '../pages/login/register/register.module#RegisterPageModule' },
  { path: 'login/phone', loadChildren: '../pages/login/phone-auth/phone-auth.module#PhoneAuthPageModule' },
  { path: 'login/verif-phone', loadChildren: '../pages/login/phone-verif/phone-verif.module#PhoneVerifPageModule' },
  { path: 'login/email', loadChildren: '../pages/login/login-email/login-email.module#LoginEmailPageModule' },
  { path: 'login/forgot', loadChildren: '../pages/login/forgot-pass/forgot-pass.module#ForgotPassPageModule' },
  { path: 'tabs/home', loadChildren: '../pages/home/home.module#HomePageModule' },
  { path: 'tabs/profile', loadChildren: '../pages/profile/profile.module#ProfilePageModule' },
  { path: 'tabs/profile/edit-profile', loadChildren: '../pages/profile/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'tabs/profile/edit-email', loadChildren: '../pages/profile/edit-email/edit-email.module#EditEmailPageModule' },
  { path: 'tabs/profile/edit-password', loadChildren: '../pages/profile/edit-password/edit-password.module#EditPasswordPageModule' },
  { path: 'tabs/profile/edit-phone', loadChildren: '../pages/profile/edit-phone/edit-phone.module#EditPhonePageModule' },
  {
    path: 'tabs',
    canActivate: [AuthGuard],
    loadChildren: '../pages/tabs/tabs.module#TabsPageModule'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
