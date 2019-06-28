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
  scanProduct(upcCode) {
    this.restService.getProductInformation(upcCode)
    .subscribe(
      data=> {
        let temp = data;
        //fire event saying data is complete
        this.addItemToLocalStorage(data[0]);
      }
    );
    return false;
  }

  addItemToLocalStorage(data){
    if(data){
      let itemList:any[] = JSON.parse(window.localStorage.getItem("itemList"));
      if(!itemList){
        itemList = [];
      }
      itemList.push({date: Date.now(), name:data.productname, weight:Math.random() * 300 + 200});
      window.localStorage.setItem("itemList", JSON.stringify(itemList));
    }
  }
}
