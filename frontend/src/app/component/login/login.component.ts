import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular-6-social-login';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {


  constructor(private socialAuthService: AuthService, private userService: UserService) { }

  ngOnInit() {
  }

  facebookLogin() {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID)
    .then(userData => {
      console.log(userData);
    });
  }

  googleLogin() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
    .then(userData => {

      const user = new User;
      user.name = userData.name;
      user.email = userData.email;

      this.userService.postUser(user)
      .subscribe(res => {
        console.log(res);
      });
    });
  }


}
