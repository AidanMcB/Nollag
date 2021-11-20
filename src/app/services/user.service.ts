import { query } from "@angular/animations";
import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { from } from "rxjs";
import { User } from "../models/user.models";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private _firestore: AngularFirestore
  ) {}

  public getUserByNameAndPassword(firstName: string, password: string) {
    return this._firestore.collection('user-collection', ref => ref.where('firstName', '==', firstName)
    .where('password', '==', password))
    .valueChanges({ idField: 'id' });
  }

  public getUserDoc(id: string) {
    return this._firestore
    .collection('user-collection')
    .doc(id)
    .valueChanges();
  }

  public getUserList() {
    return this._firestore
    .collection('user-collection')
    .snapshotChanges();
  }

  // as Promise
  public createUser(user: User) {
    const localStorageUser = user;
    return new Promise<any>((resolve, reject) => {
      this._firestore
        .collection('user-collection')
        .add(user)
        .then((response: any )=> {
          user.id = response.id;
          localStorage.setItem("user", JSON.stringify(user));
        }, ( error:any ) => reject(error));
    })
  }

  // as Observable
  public createUserObserver(user: User) {
    return from(this._firestore
    .collection('user-collection')
    .add(user))

  }

  public deleteUser(user: User) {
    return this._firestore
    .collection('user-collection')
    .doc(user.id)
    .delete();
  }

  public updateUser(user: User, id: string) {
    return this._firestore
    .collection('user-collection')
    .doc(id)
    .update({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password
    })
  }
}
