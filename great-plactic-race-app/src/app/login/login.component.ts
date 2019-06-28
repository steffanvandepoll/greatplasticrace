import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() loginDone: EventEmitter<any> = new EventEmitter();

  email: string;
  password: string;
  hasError = false;
  constructor() { }

  ngOnInit() {
  }

  validateUser(){
    if(this.email === 'user@gmail.com' && this.password==='admin'){
      this.loginDone.emit(this.email);
      this.hasError = false;
    }else{
      this.hasError = true;
    }

  }

}
