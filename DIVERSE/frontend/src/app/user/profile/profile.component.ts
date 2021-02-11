import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserPostsService } from 'src/app/_core/api/user-posts.service';
import { PostText, UserPost } from 'src/app/_core/models/UserPost';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
postForm: FormGroup;
submittedPressed = false;
errorMessage: string;
success: boolean=false;
loading=true;
feedList: UserPost[];
userPosts: UserPost[]=[];
decodedToken: any;
tokenFName: any;
tokenLName: any;
tokenMail: any;
tokenGender: any;
tokenId: any;
  constructor(private formBuilder: FormBuilder, private userPostsService: UserPostsService){
   }
   
   ngOnInit(): void {
    this.createForm(),
    this.decodedToken= jwt_decode(localStorage.getItem("token")),
    this.tokenFName=this.decodedToken.firstName,
    this.tokenLName=this.decodedToken.lastName,
    this.tokenMail=this.decodedToken.email,
    this.tokenGender=this.decodedToken.gender,
    this.tokenId=this.decodedToken.Id,
    console.log(this.tokenFName, this.tokenLName, this.tokenMail, this.tokenGender)
  }
  createForm() {
    this.postForm = this.formBuilder.group({
      text: [null],
    });
  }




  post(): void {
    this.submittedPressed = true;
    if (this.postForm.invalid) {
      return;
    }

    const postData: PostText = new PostText(
      this.text.value
    );
      this.userPostsService.create(postData).subscribe(
        (response: any)=>{console.log(response);
        if(response.status)
           this.success=true;
        else this.errorMessage=response.message},

        (error)=>{console.log(error);
          this.errorMessage=error.error.message;
          
        }
      )
  }

  get text(): AbstractControl {
    return this.postForm.get('text');
  }

  

  getPostsById(){
    this.loading=true;
    this.userPostsService.getPostsById(this.tokenId).subscribe(
      (userPosts: UserPost) =>{
        //this.userPosts = [...this.userPosts, ...userPosts];
        this.userPosts = this.userPosts.concat(userPosts);
        this.loading=false;
        console.log(userPosts)
      },
      (error)=>{ 
        console.log(error);
        this.loading=false;
      }
    );
  }


   
}
