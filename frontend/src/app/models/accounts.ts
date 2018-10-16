export class Account {

  constructor(account_type = '', initial_balance = '') {
    this.account_type = account_type;
    this.initial_balance = initial_balance;
  }

  initial_balance: string;
  account_type: string;
}
