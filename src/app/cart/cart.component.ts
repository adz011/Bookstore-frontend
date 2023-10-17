import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { Cart, CartItem } from '../models/cart.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart: Cart = {items: []};

dataSource : Array<CartItem> = [];

displayedColumns: Array<string> = [
  'product',
  'name',
  'price',
  'quantity',
  'total',
  'action',
]

constructor(private cartService: CartService,  private http: HttpClient){

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

  onCheckout(): void {
    this.http
      .post('http://localhost:4242/checkout', {
        items: this.cart.items,
      })
}}
