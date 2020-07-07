import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicSelectableModule } from 'ionic-selectable';
import { IonicModule } from '@ionic/angular';

import { PhoneVerifPage } from './phone-verif.page';

const routes: Routes = [
  {
    path: '',
    component: PhoneVerifPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule, IonicSelectableModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PhoneVerifPage]
})
export class PhoneVerifPageModule {}
