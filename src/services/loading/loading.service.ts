import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  load: any;

  constructor(private loader: LoadingController) { }

  async present() {
    this.load = await this.loader.create({
      message: 'Please wait...',
      spinner: 'crescent'
    });
    return await this.load.present();
  }

  async dismiss() {
    return await this.load.dismiss();
  }

  // present() {
  //   const loadingController = document.querySelector('ion-loading-controller');
  //   await loadingController.componentOnReady();

  //   this.load = this.loader.create({
  //     message: 'Please wait...',
  //     spinner: 'crescent'
  //   });
  //   return this.load.present();

  //   // this.load = this.loader.create({
  //     // spinner: 'crescent',
  //     // content: `
  //     //   <div class="loading-custom-spinner-container">
  //     //     <div class="loading-custom-spinner-box"></div>
  //     //   </div>
  //     //   <div>Please wait ...</div>`
  //   // });
    
  //   // return this.load.present(); 
  // }

  // presentNoDissmiss() {
  //   this.load = this.loader.create({
  //     spinner: 'crescent',
  //     content: `
  //       <div class="loading-custom-spinner-container">
  //         <div class="loading-custom-spinner-box"></div>
  //       </div>
  //       <div>Please wait ...</div>`,
  //       dismissOnPageChange: true
  //   });
    
  //   return this.load.present(); 
  // }
}
