import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../_core/api/account.service';
import { RegisterData } from '../../_core/models/User';
// export class RegisterData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   gender: string;

//   constructor(firstName: string, lastName: string, email: string, password: string, gender: string) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.password = password;
//     this.gender = gender;
//   }
// }
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm: FormGroup;
submittedPressed = false;
success: boolean=false;
private router:Router;
errorMessage: string;

  constructor(private formBuilder: FormBuilder, private accountService:AccountService) {
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.registerForm = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      passwords: this.formBuilder.group({
        password: [null, [Validators.required, Validators.minLength(8)]],
        confPassword: [null, [Validators.required]],
      }, {validators: this.confPasswordMatchesValidator()}),
      gender: [null, [Validators.required]]
    });
  }
  confPasswordMatchesValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      return control.get('password').value !== control.get('confPassword').value
        ? {confPass: true}
        : null;
    };
  }

  submit(): void {
    this.submittedPressed = true;
    if (this.registerForm.invalid) {
      return;
    }

    const registerData: RegisterData = new RegisterData(
      this.firstName.value,
      this.lastName.value,
      this.email.value,
      this.password.value,
      this.gender.value
    );
      this.accountService.register(registerData).subscribe(
        (response:any)=>{console.log(response);
        if(response.status)
          this.success=true;
        else this.errorMessage=response.message},

        (error)=>{console.log(error);
          this.errorMessage=error.error.message;
          
        }
        );
  }

  get firstName(): AbstractControl {
    return this.registerForm.get('firstName');
  }

  get lastName(): AbstractControl {
    return this.registerForm.get('lastName');
  }

  get email(): AbstractControl {
    return this.registerForm.get('email');
  }

  get passwords(): AbstractControl {
    return this.registerForm.get('passwords');
  }

  get password(): AbstractControl {
    return this.registerForm.get('passwords').get('password');
  }

  get confPassword(): AbstractControl {
    return this.registerForm.get('passwords').get('confPassword');
  }

  get gender(): AbstractControl {
    return this.registerForm.get('gender');
  }


}
