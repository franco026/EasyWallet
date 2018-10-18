export class Account {

  constructor(id_account = '', account_type = '', initial_balance = '', state = '') {

    this.id_account = id_account;
    this.account_type = account_type;
    this.initial_balance = initial_balance;
    this.state = state;
  }
  id_account: string;
  initial_balance: string;
  account_type: string;
  state: string;
}
