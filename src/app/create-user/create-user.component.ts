import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app--user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  public showPassword: boolean = false;

  public userForm = this._formBuilder.group({
    firstName: this._formBuilder.control(null),
    lastName: this._formBuilder.control(null),
    email: this._formBuilder.control(null),
    password: this._formBuilder.control(null)
  })
  constructor(
    private _userService: UserService,
    private _formBuilder: FormBuilder,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  public onSubmit() {
    this._userService.createUser(this.userForm.value);
    this._router.navigate(['list-users']);
  }

  public toggleHiddenPassword(): void {
    this.showPassword = !this.showPassword;
  }
}
