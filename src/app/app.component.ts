import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './models/user.interface';
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
    let user = localStorage.getItem("user")
    if(user!=null && user!="undefined"){
    this.currentUser = JSON.parse(user)
    }
  }
  //setItem
  //getItem
  //removeItem

  public printUser() {
    let user = localStorage.getItem("user")
    if(user!=null){
    this.currentUser = JSON.parse(user)
    console.log(this.currentUser)
    }
  }
}
