import { Component, OnDestroy, OnInit } from '@angular/core';
import {  Subscription } from 'rxjs';
import { Item } from 'src/app/models/item.model';
import { CartService } from 'src/app/services/cart.service';
import { StoreService } from 'src/app/services/store.service';

const ROWS_HEIGHT : {[id:number] : number}={1: 400, 3:335, 4:350}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  cols= 3;
  category : string | undefined;
  rowHeight = ROWS_HEIGHT[this.cols];
  items : Array<Item> | undefined;
  count ='12';
  sort = 'desc';
  itemsSubscription : Subscription | undefined;
  constructor(private cartService: CartService, private storeService: StoreService){

  }
  ngOnDestroy(): void {
    if(this.itemsSubscription){
      this.itemsSubscription.unsubscribe();
    }
  }
  ngOnInit(){
    this.getItems();
  }

  getItems(){
    this.itemsSubscription = this.storeService.getItems().subscribe((_items) =>{
      this.items = _items;
    });
  }
  onColumnsCountChange(colsNum : any){
    this.cols = colsNum; 
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onShowCategory(category:string){
      this.category = category;
  }

  onAddToCart(item:Item){
    this.cartService.addToCart({
      type: item.itemType,
      name: item.title,
      price: 100,
      quantity: 1,
      id: item.id

    })
  }
}
