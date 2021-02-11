import { Component, OnInit } from '@angular/core';
import { UserService } from '../_core/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  token: string;
  firstName:string;
  constructor(private userService:UserService) {
  }

  ngOnInit(): void {
    this.token=window.localStorage.getItem('token');
  }

}
