import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent {
  @Output() addToCart = new EventEmitter<Item>();
  @Input() fullWidthMode = false;
  @Input() item : Item | undefined ;

  onAddToCart(){
    this.addToCart.emit(this.item);
  }
}
