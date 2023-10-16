import { isNgTemplate } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  removeQuantity(element: CartItem) {
    this.cart.value.items.map((_item)=>{
      if(_item.id === element.id){
        if(_item.quantity === 1 ){
          this.removeFromCart(_item);
        }else{
          _item.quantity--;
        }
      }
    }
    )
  }
  removeFromCart(element: CartItem) {
    const filteredItems = this.cart.value.items.filter(
      (_item) => _item.id !== element.id
    );

    this.cart.next({items : filteredItems});
    this._snackBar.open('1 item removed from cart.' , 'Ok', {duration : 3000});
    
  }
  cart = new BehaviorSubject<Cart>({items:[]});

  constructor(private _snackBar: MatSnackBar) { }

  addToCart(item : CartItem){
    const items = [...this.cart.value.items];

    const itemInCart = items.find((_item) => _item.id === item.id);
    if(itemInCart){
        itemInCart.quantity++;
    }else{
      items.push(item);
    }

    this.cart.next({items: items});
    this._snackBar.open('1 item added to cart', 'Ok', {duration: 3000});

  }


getTotal(items: Array<CartItem>):number{
  return items. 
  map((item) => item.price * item.quantity).
  reduce((prev, current) => prev + current, 0)
}

clearCart(){
  this.cart.next({
    items:[]
  });

  this._snackBar.open('Cart is cleared.' , 'Ok', {duration:3000});
}
}
