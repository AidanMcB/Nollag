import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public showPassword: boolean = false;

  public userLoginForm = this._formBuilder.group({
    firstName: this._formBuilder.control(null),
    password: this._formBuilder.control(null)
  })
  constructor(
    private _userService: UserService,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) { }


  ngOnInit() {

  }

  public onSubmit() {
    //if no user is logged in
    // find a specific user based on firstname and password
    // if that returns a user, login
    // if that returns no user, "User not found"

  }

  public toggleHiddenPassword() {
    this.showPassword = !this.showPassword;
  }


}
