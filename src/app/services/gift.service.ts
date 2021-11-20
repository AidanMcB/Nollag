import { query } from "@angular/animations";
import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { from } from "rxjs";
import { Gift } from "../models/gift.interface";
import { User } from "../models/user.interface";

@Injectable({
  providedIn: 'root'
})
export class GiftService {
  constructor(
    private _firestore: AngularFirestore
  ) {}

  public addAGiftToWishList(newGift: Gift) {
    console.log(newGift)
    return from(this._firestore
    .collection('gift-collection')
    .add(newGift))
  }

  public getGiftsForUser(uid: string) {
    return this._firestore.collection('gift-collection',
     ref => ref.where('requestedByUserId', '==', uid))
    .valueChanges({ idField: 'id' });
  }


}
