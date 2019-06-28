import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  loginVisible = false;
  scannerVisible = false;
  title = 'great-plactic-race-app';
  constructor() {
  }

  showLoginInput(){
    this.loginVisible = true;
  }

  showScanner(){
    this.loginVisible = false;
    this.scannerVisible = true;
  }
}
