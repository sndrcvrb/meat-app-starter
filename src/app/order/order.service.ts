import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { MEAT_API } from 'app/app.api';
import { Order } from 'app/order/order.model';
import { CartItem } from 'app/shopping-cart/cart-item.model';
import { ShoppingCartService } from 'app/shopping-cart/shopping-cart.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrderService {
  constructor(private cartService: ShoppingCartService, private http: Http) {}

  cartItems(): CartItem[] {
    return this.cartService.items;
  }

  total(): number {
    return this.cartService.total();
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

  clear() {
    this.cartService.clear();
  }

  checkOrder(order: Order): Observable<string> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http
      .post(
        `${MEAT_API}/orders`,
        JSON.stringify(order),
        new RequestOptions({ headers: headers })
      )
      .map(response => response.json())
      .map(result => result.id);
  }
}
