import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../../_core/api/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  submittedPressed = false;

  loading: boolean= false;
  success: boolean=false;
  errorMessage: string;
  constructor(
    private formBuilder: FormBuilder, 
    private accountService:AccountService, ) { }

  ngOnInit(): void {
    this.createForm();
    //this.prefillForm();
  }
  createForm(){
    this.loginForm=this.formBuilder.group({
      email:[null,[Validators.required, Validators.email]],
      password: [null,[Validators.required]],
    });
  }
  prefillForm(){
    this.loginForm.patchValue({
      email: "sume_email@gmail.com",
      password: "qwertydasdsa"      
    });

  }

  submit(){
    if(this.loginForm.invalid){
      return;    }

    
    this.accountService.login(this.loginForm.value).subscribe((response:any)=>{
      console.log(response);
      localStorage.setItem("token", response.token);
      this.loading=true;

      // this.userService.addFirstName(response.firstName);
    }

    )
  }


  get email(){
    return this.loginForm.get("email");
  }
  get password(){
    return this.loginForm.get('password');
  }


}
