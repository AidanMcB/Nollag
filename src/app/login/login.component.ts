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
  public errorMessage: string = '';

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
    this._userService.getUserByNameAndPassword(this.userLoginForm.value.firstName, this.userLoginForm.value.password)
    .subscribe( (resp: any) => {
      if(resp.length > 0){
        localStorage.setItem("user", JSON.stringify(resp[0]))
        this.errorMessage = '';
      } else {
   this.errorMessage = 'Check first name and password or '
      }
    })
  }

  public toggleHiddenPassword() {
    this.showPassword = !this.showPassword;
  }

}
