import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements OnInit {
  @Output() itemAdded: EventEmitter<any> = new EventEmitter();

  constructor(private restService: RestService) {}
  ngOnInit() {
  }
  scanProduct(upcCode) {
    this.restService.getProductInformation(upcCode)
    .subscribe(
      data=> {
        let temp = data[0];
        let item = {date: Date.now(), name:temp.productname, weight:Math.random() * 300 + 200};
        //fire event saying data is complete and add to local storage to save data
        this.addItemToLocalStorage(item);
        this.itemAdded.emit(item);
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
      itemList.push();
      window.localStorage.setItem("itemList", JSON.stringify(itemList));
    }
  }
}
