import { Component, OnInit } from '@angular/core';
import { SortType } from '../../_core/constants/SortType';
import {UserPostsService} from "../../_core/api/user-posts.service";
import { UserPost, UserPostsFilters } from '../../_core/models/UserPost';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  feedList: UserPost[];
  userPosts: UserPost[]=[];

  filters: UserPostsFilters = new UserPostsFilters(0, 10,  SortType.FirstNameAscendent);
  loading=true;

  constructor( 
    private userPostsService: UserPostsService,
    ){
   }

 ngOnInit(): void {
    this.getUserPosts();
  }

  getUserPosts(){
    this.loading=true;
    this.userPostsService.getUserPosts().subscribe(
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
 
//   showMore() {
//   //this.filters.page++;
//     this.getUserPosts();
//     // this.feedList = this.feedList.concat(this.userPosts.slice(this.filters.lastIndex, this.filters.lastIndex + this.filters.size));
//     //this.filters.lastIndex = this.filters.lastIndex + this.filters.size;
//   }
// }

}