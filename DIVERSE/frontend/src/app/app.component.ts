import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loading = true;

  ngOnInit() {
    const token = window.localStorage.getItem('token');
    /*if (token) {
      // call get-user-info endpoint which should return data about the user (firstName, lastName)
    } else {
      this.loading = false;
    }*/ //make this work or else nothing shows
    
  }
}
