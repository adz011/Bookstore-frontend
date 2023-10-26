import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import {  Subscription } from 'rxjs';
import { Auction, Auctions } from 'src/app/models/auction.model';
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
  auctionsData : Auctions | undefined;
  pageIndex =0;
  pageSize=12;
  sort = 'descending';
  itemsTotalCount = 0;
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
    this.auctionSubscription = this.storeService.getItems(this.sort, this.pageIndex, this.pageSize, this.category).subscribe((_auctions) =>{
      this.auctionsData = _auctions;
      this.itemsTotalCount = this.auctionsData.totalItems; 
      this.auctions = this.auctionsData.auctionDTOList;
    });
  }

  getItemsDescending(){

  }
  onColumnsCountChange(colsNum : any){
    this.cols = colsNum; 
    this.rowHeight = ROWS_HEIGHT[this.cols];
  }

  onSortChange(sort : string){
    this.sort = sort;
    this.getItems();
  }

  onItemsCountChange(pageSize : any){
    this.pageSize = pageSize;
    this.getItems();

  }

  onShowCategory(category:string){
      this.category = category;
      console.log("called on show category method");
        this.getItems();
  }

  onPageChange(page: any){
    this.pageIndex = page;
    this.getItems();
  }

  handlePageEvent(e: PageEvent) {
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.getItems();
  }

  onAddToCart(auction:Auction){
    this.cartService.addToCart({
      name: auction.item.title,
      price: auction.price,
      quantity: 1,
      id: auction.id,
      thumbnail: auction.item.imageLinks.smallThumbnail,
    })
  }
}
