import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class PhotoLibraryService {

  constructor() { }

  encodeImageUri(imageUri, callback) {
    const c = document.createElement('canvas');
    const ctx = c.getContext('2d');
    const img = new Image();
    img.onload = function() {
      const aux: any = this;
      c.width = aux.width;
      c.height = aux.height;
      ctx.drawImage(img, 0, 0);
      const url = c.toDataURL('image/jpeg');
      callback(url);
    };
    img.src = imageUri;
  }

  uploadImage(imageURI, filename) {
    return new Promise<any>((resolve, reject) => {
      const imgRef = firebase.storage().ref().child(filename);
      this.encodeImageUri(imageURI, function(image64) {
        imgRef.putString(image64, 'data_url').then(() => {
          imgRef.getDownloadURL().then((url: any) => {
            resolve(url);
          });
        }, (e) => {
          reject(e);
        });
      });
    });
  }
}
