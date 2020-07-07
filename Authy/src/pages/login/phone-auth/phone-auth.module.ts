import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicSelectableModule } from 'ionic-selectable';
import { IonicModule } from '@ionic/angular';

import { PhoneAuthPage } from './phone-auth.page';

const routes: Routes = [
  {
    path: '',
    component: PhoneAuthPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule, IonicSelectableModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PhoneAuthPage]
})
export class PhoneAuthPageModule {}
