import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Account } from '../models/accounts';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectaccount: Account;
  selectuser: User;
  account: Account[];
  user: User[];
  readonly URL_API = 'http://localhost:3000/api/users/login';
  readonly URL_APIA = 'http://localhost:3000/api/users/account';

  constructor(private http: HttpClient, private router: Router) {
    this.selectuser = new User();
    this.selectaccount = new Account();
  }

  getUser() {
    return this.http.get(this.URL_API);
  }

  postUser(userpost: User) {
    console.log(userpost);
    return this.http.post(this.URL_API, userpost);
  }

  postAccount(accountpost: Account) {
    console.log(accountpost);
    return this.http.post(this.URL_APIA, accountpost);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getlogouUser() {
  localStorage.removeItem('token');
  this.router.navigate(['/']);
  }

  getToken() {
    return localStorage.getItem('token');
  }
  /** putUser(userput: User) {
    return this.http.put(this.URL_API + `${userput._id}`, userput);
  }*/
}
