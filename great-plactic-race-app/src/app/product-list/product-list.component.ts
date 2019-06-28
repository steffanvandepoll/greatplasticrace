import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  itemList;
  totalWeight;

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

  initListIfEmpty(){
    let list = [];

    let item1 = {date:"06-28-2019", name:"Coca Cola bottle 1,5L", weight:432};
    let item2 = {date:"06-28-2019", name:"Coca Cola bottle 1,5L", weight:345};
    let item3 = {date:"06-28-2019", name:"Coca Cola bottle 1,5L", weight:185};

    window.localStorage.setItem("itemList", JSON.stringify([item1, item2, item3]));
  }

  ngOnInit() {
  }

}
