import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfilePostComponent } from './profile-post/profile-post.component';



@NgModule({
  declarations: [
    ProfileComponent,
    RegisterComponent,
    LoginComponent,
    ProfilePostComponent

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { 
  
}
