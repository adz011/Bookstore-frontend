import {Component, Input} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Cart, CartItem} from '../models/cart.model';
import {Item} from '../models/item.model';
import {CartService} from '../services/cart.service';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  value = 'localhost:4200/home';
  private _cart: Cart = {items: []};
  itemsQuantity = 0;

  @Input()
  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;

    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }

  constructor(
    private cartService: CartService,
    private _snackBar: MatSnackBar,
    private authService: AuthService
  ) {

  }

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  onCopyToClipboard() {
    this._snackBar.open('Copied to clipboard.', 'Ok', {duration: 3000});
  }

  onClearCart() {
    this.cartService.clearCart();
  }

  logout() {
    this.authService.logout()
  }
}
