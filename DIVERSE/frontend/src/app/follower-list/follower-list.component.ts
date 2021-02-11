import { Component, OnInit } from '@angular/core';
import { User } from '../_core/models/User';
import { UserService } from '../_core/services/user.service';

@Component({
  selector: 'app-follower-list',
  templateUrl: './follower-list.component.html',
  styleUrls: ['./follower-list.component.css']
})
export class FollowerListComponent implements OnInit {
peepsList: User[] = [];
users: User[] = [];
loading = true;


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.loading=true;
    this.userService.getAll().subscribe(
      (users: any)=>{
        this.users=[...this.users, ...users];
        this.loading=false;
        console.log(users);
      },
      (error)=>{
        console.log(error);
        this.loading=false;
      }
    )
  }
};

// export class user{
//   firstName:string;
//   lastName:string;

//   constructor(firstName:string, lastName: string){
//     this.firstName=firstName;
//     this.lastName=lastName;
//   }
// }