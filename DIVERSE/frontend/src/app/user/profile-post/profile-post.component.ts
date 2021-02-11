import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserPost } from '../../_core/models/UserPost';

@Component({
  selector: 'app-profile-post',
  templateUrl: './profile-post.component.html',
  styleUrls: ['./profile-post.component.css']
})
export class ProfilePostComponent implements OnInit {
  @Input() userPost:UserPost;
  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

}
