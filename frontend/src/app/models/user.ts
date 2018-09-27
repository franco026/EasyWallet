export class User {

  constructor(_id = '', Name = '', Password = '', Email = '') {
    this._id = _id;
    this.Name = Name;
    this.Password = Password;
    this.Email = Email;
  }

  _id: string;
  Name: string;
  Password: string;
  Email: string;
}
