export class RegisterData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    gender:string;
  
    constructor(
      firstName: string,
      lastName: string,
      email: string,
      password: string,
      gender:string
    ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.email = email;
      this.password = password;
      this.gender=gender;
    }
  }
  
  export class User {
    constructor(
      public id: number,
      public firstName: string,
      public lastName: string,
      public email: string,
      public gender: string,
      public comment: string,
    ) {
      this.firstName=firstName;
      this.lastName=lastName;
      this.comment=comment;
    }
  }
  
  export interface LoginResponse {
    token: string;
    user: User;
  }
  