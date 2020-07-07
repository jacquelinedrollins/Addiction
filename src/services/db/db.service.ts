import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/database';
import { DB } from '../../app/app.global';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor() { }

  getRef(url: string): firebase.database.Reference {
    return firebase.database().ref(url);
  }

  getUser(uid: number) {
    return this.getRef(DB.USER + uid);
  }

  getUserBy(by, param) {
    return this.getRef(DB.USER).orderByChild(by).equalTo(param);
  }

  createUser(user: any) {
    user.createdAt = new Date().getTime();
    delete user.pass; delete user.pass2;
    return this.getRef(DB.USER + user.uid).set(user);
  }

  updateUser(uid: number, data: any) {
    return this.getRef(DB.USER + uid).update(data);
  }
}
