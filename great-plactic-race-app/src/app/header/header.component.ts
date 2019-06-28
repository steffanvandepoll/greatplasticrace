import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() loginAttempt: EventEmitter<any> = new EventEmitter();
  loginState = 'Log in'

  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.loginAttempt.emit();
    this.loginState = 'Log out'
  }

}
