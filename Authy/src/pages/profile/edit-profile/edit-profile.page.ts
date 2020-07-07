import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService, PhotoLibraryService, LoadingService, ToastService } from 'src/services/services';
import { NavController, Platform, ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Crop } from '@ionic-native/crop/ngx';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  public form: FormGroup;
  private changePic: boolean;
  public avatar: any;
  private win: any = window;

  constructor(public auth: AuthService, private photo: PhotoLibraryService, private platform: Platform, private crop: Crop, private camera: Camera, private action: ActionSheetController, private toast: ToastService, private nav: NavController,
    private loading: LoadingService, private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: [this.auth.user.name, Validators.required],
      dob: [this.auth.user.dob]
    });

    this.avatar = this.auth.user.avatar;
  }

  async changeAvatar() {
    const actionSheet = await this.action.create({
      header: 'Change avatar via gallery or camera',
      buttons: [{
          text: 'Album',
          handler: () => {
            this.takeGallery();
          }
        }, {
          text: 'Camera',
          handler: () => {
            this.takePicture();
          }
        }
      ]
    });
    await actionSheet.present();
  }

  takeGallery() {
    const options: CameraOptions = { quality: 100, correctOrientation: true, encodingType: this.camera.EncodingType.JPEG, sourceType: this.camera.PictureSourceType.PHOTOLIBRARY, mediaType: this.camera.PictureSourceType.PHOTOLIBRARY };
    this.camera.getPicture(options).then((data) => {
      this.crop.crop(data, {quality: 100}).then(newImage => {
          this.avatar = newImage;
          this.changePic = true;
      }, (err) => {
        this.changePic = false;
        console.log(err);
        this.toast.showWithClose(err);
      });
    }, (err) => {
      console.log(err);
      this.toast.showWithClose(err);
    });
  }

  takePicture() {
    const options: CameraOptions = { quality: 80, correctOrientation: true, encodingType: this.camera.EncodingType.JPEG };
    this.camera.getPicture(options).then((data) => {
      this.crop.crop(data, {quality: 100, targetWidth: 480}).then((newImage) => {
        this.avatar = newImage;
        this.changePic = true;
      }, (err) => {
        this.changePic = false;
        console.log(err);
        this.toast.showWithClose(err);
      });
    }, (err) => {
      console.log(err);
      this.toast.showWithClose(err);
    });
  }

  normalize(url) {
    return this.win.Ionic.WebView.convertFileSrc(url);
  }

  submit() {
    this.loading.present();
    if (this.changePic) {
      this.photo.uploadImage(this.normalize(this.avatar), `authy/user/${this.auth.user.uid}.jpg`).then((res) => {
        const tmp = this.form.value;
        tmp.avatar = res;
        if (res) {
          this.auth.updateProfile(tmp).then((q: any) => {
            this.loading.dismiss();
            this.toast.show(q);
          }, (err) => {
            console.log(err);
            this.loading.dismiss();
            this.toast.showWithClose(err);
          });
        }
      }, (err) => {
        console.log(err);
        this.loading.dismiss();
        this.toast.showWithClose(err.message);
      });
    } else {
      this.auth.updateProfile(this.form.value).then((q: any) => {
        this.toast.show(q);
        this.loading.dismiss();
      }, (err) => {
        console.log(err);
        this.toast.showWithClose(err);
        this.loading.dismiss();
      });
    }
  }

}
