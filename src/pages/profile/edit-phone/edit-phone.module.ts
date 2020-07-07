import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicSelectableModule } from 'ionic-selectable';

import { IonicModule } from '@ionic/angular';

import { EditPhonePage } from './edit-phone.page';

const routes: Routes = [
  {
    path: '',
    component: EditPhonePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule, IonicSelectableModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditPhonePage]
})
export class EditPhonePageModule {}
