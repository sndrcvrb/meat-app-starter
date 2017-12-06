import { CartItem } from 'app/shopping-cart/cart-item.model';
import { Injectable } from '@angular/core';

import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService) {
  }

  cartItems(): CartItem[] {
    return this.cartService.items;
  }

  increaseQuantity(item: CartItem) {
    this.cartService.increaseQuantity(item);
  }

  decreaseQuantity(item: CartItem) {
    this.cartService.decreaseQuantity(item);
  }

  removeItem(item: CartItem) {
    this.cartService.removeItem(item);
  }
}
