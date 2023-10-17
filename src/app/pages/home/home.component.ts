import { Component, OnDestroy, OnInit } from '@angular/core';
import {  Subscription } from 'rxjs';
import { Auction } from 'src/app/models/auction.model';
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
  auctions : Array<Auction> | undefined;
  count ='12';
  sort = 'descending';
  auctionSubscription : Subscription | undefined;
  constructor(private cartService: CartService, private storeService: StoreService){

  }
  ngOnDestroy(): void {
    if(this.auctionSubscription){
      this.auctionSubscription.unsubscribe();
    }
  }
  ngOnInit(){
    this.getItems();
  }

  getItems(){
    this.auctionSubscription = this.storeService.getItems(this.count, this.sort).subscribe((_auctions) =>{
      this.auctions = _auctions;
    });
  }
  onColumnsCountChange(colsNum : any){
    this.cols = colsNum; 
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onSortChange(sort : string){
    this.sort = sort;
    this.getItems();
  }

  onItemsCountChange(quantity : any){
    this.count = quantity.toString();
    this.getItems();
  }

  onShowCategory(category:string){
      this.category = category;
  }

  getProducts(): void {
    this.auctionSubscription = this.storeService
      .getItems(this.count)
      .subscribe((_auctions) => {
        this.auctions= _auctions;
      });
  }

  onAddToCart(auction:Auction){
    this.cartService.addToCart({
      name: auction.item.title,
      price: auction.price,
      quantity: 1,
      id: auction.id,
      thumbnail: auction.item.thumbnail
    })
  }
}
