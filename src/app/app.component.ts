import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './models/user.models';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nollag';

  public userRef: any;
  public currentUser: User;

  constructor(
    private _userService: UserService,
    private _formBuilder: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    const id1 = this._activatedRoute.snapshot.paramMap.get('id');
    const user = localStorage.getItem("user");
    if (user!=null){
      this._userService.getUserDoc(user).subscribe( res => {
        this.userRef = res;
       this.currentUser =  this.userRef;
       localStorage.Item("user", this.currentUser)
      })
    }
  }
  //setItem
  //getItem
  //removeItem

  public printUser() {
    console.log(localStorage)
  }
}
