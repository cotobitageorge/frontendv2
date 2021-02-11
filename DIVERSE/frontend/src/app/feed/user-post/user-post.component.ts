import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRoutingModule } from 'src/app/user/user-routing.module';
import { UserPostsService } from 'src/app/_core/api/user-posts.service';
import { User } from 'src/app/_core/models/User';
import { PostComment, UserPost } from '../../_core/models/UserPost';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {
  @Input() userPost:UserPost;
  commentForm: FormGroup;
  submittedPressedCom = false;
  errorMessage: string;
  success: boolean=false;

  comments: UserPost[]=[];
  loading=false;
  decodedToken: any;
  tokenFName: any;
  tokenLName: any;
  tokenMail: any;
  tokenGender: any;
  tokenId: any;
  constructor(private router: Router,private formBuilder: FormBuilder, private userPostsService: UserPostsService) { }

  ngOnInit(): void {
    this.createForm()
  }
  
  createForm() {
    this.commentForm=this.formBuilder.group({
      text: [null]
    })
  }
  

getCommentById() {
  this.loading=true;
  this.userPostsService.getCommentById(this.userPost.id).subscribe(
    (comments: any[] )=>{
      this.comments= [...this.comments, ...comments];
      this.loading=false;
      console.log(comments)
    },
    (error)=>{
      console.log(error);
      this.loading=false;
    }
  );
}

comment(): void{
    this.submittedPressedCom=true;
    if(this.commentForm.invalid) {
      return;
    }

    const commentData: PostComment=new PostComment(
      this.userPost.id,
      this.text.value

    );
    this.userPostsService.comment(commentData).subscribe(
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
  return this.commentForm.get('text');
}
// get postId(): AbstractControl {
//   return this.commentForm.get('postId');
// }
}
