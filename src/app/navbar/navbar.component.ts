import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { User } from '../models/user.interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() currentUser: User;
  public collapsed = true;

  constructor(
    private _userService: UserService,
    private _formBuilder: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  public print() {
    console.log(this.currentUser)
  }
  public goToUserPage() {
    let user = localStorage.getItem("user");
    if(user){
      let uid = JSON.parse(user).id;
      this._router.navigate([`user/${uid}`]);
    }
  }

  public logOut() {
    localStorage.clear();
  }

  public logIn(){
    this._router.navigate(['login']);
  }


}
