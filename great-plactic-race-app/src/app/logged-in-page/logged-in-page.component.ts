import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logged-in-page',
  templateUrl: './logged-in-page.component.html',
  styleUrls: ['./logged-in-page.component.css']
})
export class LoggedInPageComponent implements OnInit {
  itemList:any[];
  totalWeight:number;
  companyTotalWeight:number = 983456;

  constructor() {
    this.itemList = JSON.parse(window.localStorage.getItem("itemList"));

    if(!this.itemList || this.itemList.length == 0){
      this.initListIfEmpty();
    }
    let weight = 0;
    [].forEach.call(this.itemList, function(item) {
        weight += item.weight;
    });

    this.totalWeight = weight;
  }

  triggerItemAdded(data) {
    console.log(data);
    this.itemList.push(data);
  }

  ngOnInit() {
  }

  initListIfEmpty(){
    let list = [];

    let item1 = {date: Date.now(), name:"Coca Cola bottle 1,5L", weight:201};
    let item2 = {date: Date.now(), name:"Andrélon Classic Iedere Dag Shampoo", weight:145};
    let item3 = {date: Date.now(), name:"Bronwater pack 15L Tastywater", weight:485};

    window.localStorage.setItem("itemList", JSON.stringify([item1, item2, item3]));
  }

}
