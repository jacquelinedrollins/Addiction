import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toast: ToastController) { }

  async show(msg: string, pos: any = 'bottom') {
    const toast = await this.toast.create({
      message: msg,
      duration: 2000,
      position: pos,
      color: 'success'
    });

    return await toast.present();
  }

  async showWithClose(msg: string, css: string = 'err', pos: any = 'bottom', close: boolean = true) {
    const toast = await this.toast.create({
      color: 'danger',
      position: pos,
      message: msg,
      showCloseButton: close,
      closeButtonText: 'Ok'
    });
    return await toast.present();
  }
}
