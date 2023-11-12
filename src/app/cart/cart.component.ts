import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { Cart, CartItem } from '../models/cart.model';
import { CartService } from '../services/cart.service';
import { loadStripe } from '@stripe/stripe-js';

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
      .subscribe(async (res: any) => {
        let stripe = await loadStripe('pk_test_51O99oULdNiMwQpkv2eEt2W5pFzKB4BlME4Wn1Ud1umF126zLzsvi7UebReovqqPYXiBiA8ypty0D4urbi8CcB4Za00dEPiRg5y');
        stripe?.redirectToCheckout({
          sessionId: res.id,
        });
      });
  }
}
