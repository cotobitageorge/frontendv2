import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_core/models/User';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-follower-card',
  templateUrl: './follower-card.component.html',
  styleUrls: ['./follower-card.component.css']
})
export class FollowerCardComponent implements OnInit {
@Input() user:User;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

}
