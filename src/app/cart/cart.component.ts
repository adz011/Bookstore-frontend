import { Component, ɵsetCurrentInjector } from '@angular/core';
import { Cart, CartItem } from '../models/cart.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart: Cart = {items: [{
    type : 'food',
    name : 'snickers',
    price: 150,
    quantity: 1,
    id : '1',
}]};

dataSource : Array<CartItem> = [];

displayedColumns: Array<string> = [
  'type',
  'name',
  'price',
  'quantity',
  'total',
  'action'
]

constructor(private cartService: CartService){

}

ngOnInit(){
  this.cartService.cart.subscribe((_cart:Cart) =>{
    this.cart = _cart;
    this.dataSource = this.cart.items;
  });
}
getTotal(items: Array<CartItem>):number{
  return this.cartService.getTotal(items);
}
onRemoveFromCart(element:CartItem){
  this.cartService.removeFromCart(element);
}

onClearCart(){
  this.cartService.clearCart();
}
onAddQuantity(element : CartItem){
  this.cartService.addToCart(element);
}
onRemoveQuantity(element : CartItem){
  this.cartService.removeQuantity(element);
}
}
