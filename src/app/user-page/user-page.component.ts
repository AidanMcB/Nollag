import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Gift } from '../models/gift.interface';
import { UserPageComponentState } from '../models/user.interface';
import { GetState, SetState, UserPageDefaultState } from '../models/user.models';
import { GiftService } from '../services/gift.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  public state$ = new BehaviorSubject<UserPageComponentState>(UserPageDefaultState);
  //default page state to include a user object

  public giftForm = this._formBuilder.group({
    name: this._formBuilder.control(null),
    price: this._formBuilder.control(null),
    requestedByUserId: this._formBuilder.control(null),
    requestedByUser: this._formBuilder.control(null),
  })

  constructor(
    private _formBuilder: FormBuilder,
    private _giftService: GiftService
  ) { }

  ngOnInit(): void {
    let userItem = localStorage.getItem("user");
    if(userItem){
      let user = JSON.parse(userItem);
      SetState( this.state$, { user } )
      // subscribe method to get gifts of a specific user and keep them updated
      this._giftService.getGiftsForUser(user.id).subscribe((usersGifts: any) => {
        SetState(this.state$, {gifts: usersGifts})
      })
    }else{
      SetState( this.state$, { errorMessage: 'No User Currently Logged In!' })
    }
  }

  public onSubmitGiftForm() {
    const user = GetState(this.state$, 'user');
    console.log(user.id)
    if(this.giftForm.valid){
      this.giftForm.patchValue({
        requestedByUser: user,
        requestedByUserId: user.id
      })
      this._giftService.addAGiftToWishList(this.giftForm.value);
    }
  }

}
