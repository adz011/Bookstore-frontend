import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Auction } from 'src/app/models/auction.model';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent {
  @Output() addToCart = new EventEmitter<Auction>();
  @Input() fullWidthMode = false;
  @Input() auction : Auction | undefined ;

  onAddToCart(){
    this.addToCart.emit(this.auction);
  }
}
