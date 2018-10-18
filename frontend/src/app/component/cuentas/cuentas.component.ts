import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Account } from '../../models/accounts';

declare var M: any;

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.css'],
  providers: [UserService]
})
export class CuentasComponent implements OnInit {

  constructor(private userService: UserService) { }
  someModel;
  items;
  ngOnInit() {
    this.someModel = 'ahorro';
    this.items = [
      {name: 'ahorro', label: 'Ahorro'},
      {name: 'Billetera', label: 'Billetera'},
      {name: 'Corriente', label: 'Corriente'},
      {name: 'Debito', label: 'Debito'}
    ];
  }

  addUser(form: NgForm) {
    this.userService.postAccount(form.value)
    .subscribe(res => {
      console.log(res);
    });
    }

}

