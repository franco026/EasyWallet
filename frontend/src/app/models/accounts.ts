export class Account {

  constructor(name = '', id_account = '', account_type = '', initial_balance = '', state = '') {
    this.name = name;
    this.id_account = id_account;
    this.account_type = account_type;
    this.initial_balance = initial_balance;
    this.state = state;
  }
  name: string;
  id_account: string;
  initial_balance: string;
  account_type: string;
  state: string;
}
