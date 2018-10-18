import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Account } from '../../models/accounts';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editaccount',
  templateUrl: './editaccount.component.html',
  styleUrls: ['./editaccount.component.css'],
  providers: [UserService]
})
export class EditaccountComponent implements OnInit {

  constructor(private userService: UserService) { }

  someModel;
  someModelstate;
  items;
  itemsvalid;
  ngOnInit() {
    this.someModel = 'ahorro';
    this.someModelstate = 'activo';
    this.getAccount();
    this.items = [
      {name: 'ahorro', label: 'Ahorro'},
      {name: 'Billetera', label: 'Billetera'},
      {name: 'Corriente', label: 'Corriente'},
      {name: 'Debito', label: 'Debito'}
    ];

    this.itemsvalid = [
      {name: 'activo', label: 'Activo'},
      {name: 'inactivo', label: 'Inactivo'}
    ];

  }

  addUser(form: NgForm) {
    this.userService.putAccount(form.value)
    .subscribe(res => {
      this.getAccount();
      console.log(res);
    });
    }

  getAccount() {
    this.userService.getAccount()
      .subscribe(res => {
        this.userService.account = res as Account[];
      });
    }

  editAccount(account: Account, state: string, type_A: string) {
    this.userService.selectaccount = account;
    this.someModel = type_A;
    console.log(account.state);
    this.someModelstate = state;
  }
}
