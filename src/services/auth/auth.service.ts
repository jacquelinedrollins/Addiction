import { Injectable } from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Firebase } from '@ionic-native/firebase/ngx';
import * as firebase from 'firebase/app';
import 'firebase/auth';

import { DbService } from '../db/db.service';
import { CLIENTID } from '../../app/app.global';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _PLATFORM: any;

  _USER: any = {
    isLogin: false
  };

  constructor(public db: DbService, private ggp: GooglePlus, private fcb: Facebook, private fb: Firebase) {}

  get user() {
    return this._USER;
  }

  get isAuthenticated() {
    return this._USER.isLogin;
  }

  currentUser(): any {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((res: any) => {
        console.log('current user: ', res);
        if (res && res.uid) {
          // if (res.emailVerified) { this.db.updateUser(res.uid, {emailVerified: true}); }
          this.setUserGlobalVariable(res.uid).then(() => {
            resolve(res);
          }).catch(err => {
            reject(err);
          });
        } else {
          reject(false);
        }
      }, (err: any) => {
        reject(err);
      });
    });
  }

  setUserGlobalVariable(uid) {
    return new Promise((resolve, reject) => {
      this.db.getUser(uid).once('value', (q) => {
        if (q.val()) {
          this._USER = q.val();
          resolve(this._USER);
        } else {
          reject('User has not been registered yet');
        }
      });
    });
  }

  registerByEmail(user) {
    return new Promise((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.pass).then((res: any) => {
        user.uid = res.user.uid;
        this.db.createUser(user).then(() => {
          this.setUserGlobalVariable(user.uid).then(() => {
            this.sendEmailConfirm(user).then((q) => {
              resolve(q);
            });
          });
        });
      }).catch((err) => {
        reject(err);
      });
    });
  }

  fetchProvidersForEmail(email: string) {
    return new Promise((resolve, reject) => {
      firebase.auth().fetchSignInMethodsForEmail(email).then((res) => {
        if (res.length > 0) { resolve(res); } else { reject(false); }
      });
    });
  }

  genSocialUser(res) {
    return {
      avatar: res.photoURL || null,
      uid: res.uid,
      name: res.displayName,
      email: res.email,
      emailVerified: true,
    };
  }

  loginByEmail(user: any) {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(user.email, user.pass).then((res: any) => {
        console.log(res.user);
        if (res.user.emailVerified) { this.db.updateUser(res.user.uid, {emailVerified: true}); }
        this.setUserGlobalVariable(res.user.uid).then(() => {
          resolve(res.user);
        }).catch(err => {
          reject(err);
        });
      }).catch((err) => {
        if (err.code === 'auth/wrong-password') {
          reject('Invalid password or user not registered');
        } else {
          reject(err.message);
        }
      });
    });
  }

  unlink(provider) {
    return new Promise((resolve, reject) => {
      firebase.auth().currentUser.unlink(provider).then(() => {
        switch (provider) {
          case 'facebook.com':
          this.db.updateUser(this.user.uid, {facebook: null}).then(() => {
            this.user.facebook = null;
            resolve('Facebook has been unlinked successfully');
          });
          break;

          case 'google.com':
          this.db.updateUser(this.user.uid, {google: null}).then(() => {
            this.user.google = null;
            resolve('Google has been unlinked successfully');
          });
          break;
        }
      }).catch(err => {
        reject(err);
      });
    });
  }

  loginByFb() {
    return new Promise((resolve, reject) => {
      this.fcb.login(['public_profile', 'email']).then((fbres) => {
        console.log(fbres);
        const credential = firebase.auth.FacebookAuthProvider.credential(fbres.authResponse.accessToken);
        firebase.auth().signInWithCredential(credential).then((res: any) => {
          console.log(res);
          this.db.getUser(res.user.uid).once('value', (q) => {
            if (q.val()) {
              // login with current facebook account
              this.db.updateUser(res.user.uid, {facebook: res.additionalUserInfo.profile}).then(() => {
                this.setUserGlobalVariable(res.user.uid).then(() => {
                  resolve('Successfully logged in with Facebook');
                });
              });
            } else {
              // register with facebook account
              const user: any = this.genSocialUser(res.user);
              user.facebook = res.additionalUserInfo.profile;
              this.db.createUser(user).then(() => {
                this.setUserGlobalVariable(user.uid).then(() => {
                  resolve('Successfully logged in with Facebook');
                });
              });
            }
          });
        }).catch(err => {
          console.log(err);
          switch (err.code) {
            case 'auth/account-exists-with-different-credential':
            this.fetchProvidersForEmail(err.email).then((methods) => {
              console.log(methods[0]);

              // if (methods[0] === 'google.com') {
              if (this.user.uid) { // if logged in
                firebase.auth().currentUser.linkWithCredential(err.credential).then((res: any) => {
                  console.log(res);
                  this.db.updateUser(res.user.uid, {facebook: res.additionalUserInfo.profile}).then(() => {
                    this.setUserGlobalVariable(res.user.uid).then(() => {
                      resolve('Successfully connected with Facebook');
                    });
                  });
                }).catch((e) => {
                  reject(e);
                });
              } else {
                err.method = methods[0];
                reject(err);
              }
              // } else if (methods[0] === 'password') {
              //   if (this.user.uid) { // if logged in
              //     firebase.auth().currentUser.linkWithCredential(err.credential).then((res: any) => {
              //       console.log(res);
              //       this.db.updateUser(res.user.uid, {facebook: res.additionalUserInfo.profile}).then(() => {
              //         this.setUserGlobalVariable(res.user.uid).then(() => {
              //           resolve('Successfully connected with Facebook');
              //         });
              //       });
              //     }).catch((e) => {
              //       reject(e);
              //     });
              //   } else {
              //     err.method = methods[0];
              //     reject(err);
              //   }

                // firebase.auth().onAuthStateChanged((user: any) => {
                //   console.log(user);
                // firebase.auth().currentUser.linkWithCredential(err.credential).then((res: any) => {
                //   console.log(res);
                //   this.db.updateUser(res.user.uid, {facebook: res.additionalUserInfo.profile}).then(() => {
                //     this.setUserGlobalVariable(res.user.uid).then(() => {
                //       resolve('Successfully connected with Facebook');
                //     });
                //   });
                // }).catch((e) => {
                //   reject(e);
                // });
                // });
              // }
            }).catch((e) => {
              reject(e);
            });
            break;

            default:
            reject(err);
            break;
          }
        });
      }).catch((e) => {
        reject(e);
      });
    });
  }

  loginByGG() {
    return new Promise((resolve, reject) => {
      const clientid = (this._PLATFORM === 'android') ? CLIENTID.android : CLIENTID.ios;
      this.ggp.login({webClientId: clientid}).then((ggres: any) => {
        const credential = firebase.auth.GoogleAuthProvider.credential(ggres.idToken);
        firebase.auth().signInWithCredential(credential).then((res: any) => {
          this.db.getUser(res.user.uid).once('value', (q) => {
            if (q.val()) {
              // firebase bug: Override facebook provider, so we need to remove facebook account in firebase
              // https://github.com/firebase/firebase-js-sdk/issues/1249#issuecomment-505623644
              if (this.user.facebook) {
                this.db.updateUser(this.user.uid, {facebook: null});
              }
              // login with current google account
              // console.log('sign in with google: ', q.val());
              console.log(res);
              this.db.updateUser(res.user.uid, {google: res.additionalUserInfo.profile}).then(() => {
                this.setUserGlobalVariable(res.user.uid).then(() => {
                  resolve('Successfully logged in with Google');
                });
              });
            } else {
              console.log('new user with google: ', res);
              // register with google account
              const user: any = this.genSocialUser(res.user);
              console.log(user);
              user.google = res.additionalUserInfo.profile;
              this.db.createUser(user).then(() => {
                this.setUserGlobalVariable(user.uid).then(() => {
                  resolve('Successfully signed up with Google');
                });
              });
            }
          });
        }).catch((err) => {
          switch (err.code) {
            // if email exists
            case 'auth/account-exists-with-different-credential':
            this.fetchProvidersForEmail(err.email).then((methods) => {
              console.log(methods[0]);

              if (this.user.uid) { // if logged in
                firebase.auth().currentUser.linkWithCredential(err.credential).then((res: any) => {
                  console.log(res);
                  this.db.updateUser(res.user.uid, {google: res.additionalUserInfo.profile}).then(() => {
                    this.setUserGlobalVariable(res.user.uid).then(() => {
                      resolve('Successfully connected with Google');
                    });
                  });
                }).catch((e) => {
                  reject(e);
                });
              } else {
                err.method = methods[0];
                reject(err);
              }
            }).catch((e) => {
              reject(e);
            });
            break;

            default:
            reject(err);
            break;
          }
        });

      }).catch(err => {
        reject(err);
      });
    });
  }

  checkPhoneNumber(phone) {
    return new Promise((resolve, reject) => {
      this.db.getUserBy('phone', '+' + phone.area.callingCode + phone.tel).once('value', (res) => {
        if (res.val()) { resolve('Phone number +' + phone.area.callingCode + phone.tel + ' already used, please use the other one');
        } else { reject('Phone number +' + phone.area.callingCode + phone.tel + ' has not been registered yet, do you want to continue registration process?'); }
      });
    });
  }

  sendSMSVerify(phone) {
    return new Promise((resolve, reject) => {
      this.fb.verifyPhoneNumber('+' + phone.area.callingCode + phone.tel, 120).then( (res) => {
        resolve(res);
      }).catch((err) => {
        console.log(err);
        reject(err);
      });
    });
  }

  phoneAuth(verifId, code, phone, action = 'login') {
    return new Promise((resolve, reject) => {
      const credential = firebase.auth.PhoneAuthProvider.credential(verifId, code);

      firebase.auth().signInWithCredential(credential).then((res: any) => {
        if (!res.user.phoneNumber || !this.user.phone) {
          phone = '+' + phone.area.callingCode + phone.tel;
          this.db.updateUser(res.user.uid, {phone: phone}).then(() => {});
        }

        if (action === 'login') {
          this.setUserGlobalVariable(res.user.uid).then(() => {
            resolve('Successfully logged in using phone number');
          });
        } else {
          resolve(res.user);
        }
      }).catch(err => {
        reject(err);
      });
    });
  }

  registerByPhone(user, verifId, code) {
    return new Promise((resolve, reject) => {
      const credential = firebase.auth.PhoneAuthProvider.credential(verifId, code);
      firebase.auth().signInWithCredential(credential).then((res: any) => {
        console.log(res);
        firebase.auth().currentUser.linkWithCredential(firebase.auth.EmailAuthProvider.credential(user.email, user.pass)).then(() => {
          user.uid = res.user.uid;
          user.phone = '+' + user.phone.area.callingCode + user.phone.tel;
          console.log(user);
          this.db.createUser(user).then(() => {
            this.setUserGlobalVariable(user.uid).then(() => {
              this.sendEmailConfirm(user).then((q) => {
                resolve(q);
              });
            });
          });
        }).catch(err => {
          console.log('error link email');
          reject(err);
        });
        // firebase.auth().currentUser.updateEmail(user.email).then(() => {
          // this.user.email = user.email;
          // firebase.auth().currentUser.updatePassword(user.pass).then(() => {
        
        //   }).catch((err) => {
        //     console.log('error update password');
        //     reject(err.message);
        //   });
        // }).catch(err => {
        //   console.log('error updaet email');
        //   reject(err);
        // });
      }).catch(err => {
        if (err.code !== 'auth/internal-error') { reject(err); }
      });
    });
  }

  resetPassword(email: string) {
    return new Promise((resolve, reject) => {
      firebase.auth().sendPasswordResetEmail(email).then((res: any) => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  }

  setPlatform(data) {
    this._PLATFORM = data;
  }

  get platform() {
    return this._PLATFORM;
  }

  logout() {
    return new Promise(resolve => {
      firebase.auth().signOut().then(() => {
        this._USER = {};
        resolve(true);
      });
    });
  }

  updateProfile(_USER) {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged((res: any) => {
        res.updateProfile({displayName: _USER.name, photoURL: _USER.avatar || ''}).then(() => {
          this.db.updateUser(res.uid, {name: _USER.name, avatar: _USER.avatar || '', dob: _USER.dob || ''}).then(() => {
            this.user.name = _USER.name;
            if (_USER.dob) { this.user.dob = _USER.dob; }
            if (_USER.avatar) { this.user.avatar = _USER.avatar; }
            resolve('Profile updated');
          });
        }).catch((err) => {
          reject(err.message);
        });
      });
    });
  }

  updatePass(old, _new) {
    return new Promise((resolve, reject) => {
      const credential  = firebase.auth.EmailAuthProvider.credential(this.user.email, old);
      firebase.auth().currentUser.reauthenticateWithCredential(credential).then(() => {
        firebase.auth().currentUser.updatePassword(_new).then(() => {
          resolve('New password has been updated');
        }).catch((err) => {
          reject(err.message);
        });
      }).catch((err) => {
        reject(err.message);
      });
    });
  }

  updateEmail(user) {
    return new Promise((resolve, reject) => {
      const credential  = firebase.auth.EmailAuthProvider.credential(this.user.email, user.pass);
      firebase.auth().currentUser.reauthenticateWithCredential(credential).then(() => {
        firebase.auth().currentUser.updateEmail(user.email).then((res) => {
          this.user.email = user.email;
          this.db.updateUser(this.user.uid, {email: user.email}).then(() => {
            resolve('New email has been updated');
          });
        }).catch((err) => {
          reject(err.message);
        });
      }).catch((err) => {
        reject(err.message);
      });
    });
  }

  updatePhone(verifId, code, phone) {
    return new Promise((resolve, reject) => {
      // firebase.auth().onAuthStateChanged((user: any) => {
        const credential = firebase.auth.PhoneAuthProvider.credential(verifId, code);
        firebase.auth().currentUser.updatePhoneNumber(credential).then( () => {
        // user.updatePhoneNumber(credential).then( () => {
          this.user.phone = '+' + phone.area.callingCode + phone.tel;
          this.db.updateUser(this.user.uid, {phone: this.user.phone}).then(() => {
            resolve('Phone number updated');
          });
        }).catch((err) => {
          reject(err.message);
        });
      });
    // });
  }

  sendEmailConfirm(user) {
    return new Promise((resolve, reject) => {
      firebase.auth().currentUser.sendEmailVerification().then(() => {
        resolve('Hi ' + user.name + ', verification link has been sent into your inbox');
      }).catch((err) => {
        reject(err);
      });
    });
  }
}
