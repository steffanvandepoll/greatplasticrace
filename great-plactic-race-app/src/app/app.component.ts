import { Component } from '@angular/core';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'great-plactic-race-app';
  constructor(private restService: RestService) {
  }
  ngOnInit() {
    this.restService.getProductInformation();
  }
}
