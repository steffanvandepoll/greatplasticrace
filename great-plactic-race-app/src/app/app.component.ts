import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  loginVisible = false;
  loggedIn = false;
  title = 'great-plactic-race-app';
  constructor() {
  }

  showLoginInput(){
    this.loginVisible = true;
  }

  showLoggedInPage(){
    this.loginVisible = false;
    this.loggedIn = true;
  }
}
