import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements OnInit {
  constructor(private restService: RestService) {}
  ngOnInit() {
  }
  scanProduct() {
    this.restService.getProductInformation('075720000814')
    .subscribe(
      data=> {
        let temp = data;
        console.log(data);
      }
    );
    return false;
  }
}
