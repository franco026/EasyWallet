export class User {

  constructor(Name = '', Email = '') {
    this.name = Name;
    this.email = Email;
  }

  name: string;
  email: string;
}
