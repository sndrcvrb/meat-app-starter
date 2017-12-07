import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order, OrderItem } from 'app/order/order.model';

import { RadioOption } from './../shared/radio/radio-option.model';
import { CartItem } from './../shopping-cart/cart-item.model';
import { OrderService } from './order.service';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {
  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'DIN' },
    { label: 'Cartão de crédito', value: 'CRE' },
    { label: 'Vale Refeição', value: 'REF' }
  ];

  shippingFee = 8;

  constructor(private orderService: OrderService, private router: Router) {}

  ngOnInit() {}

  itemsValue(): number {
    return this.orderService.total();
  }

  cartItems(): CartItem[] {
    return this.orderService.cartItems();
  }

  increaseQuantity(item: CartItem) {
    this.orderService.increaseQuantity(item);
  }

  decreaseQuantity(item: CartItem) {
    this.orderService.decreaseQuantity(item);
  }

  removeItem(item: CartItem) {
    this.orderService.removeItem(item);
  }

  checkOrder(order: Order) {
    order.orderItems = this.cartItems().map(
      (item: CartItem) => new OrderItem(item.quantity, item.menuItem.id)
    );
    this.orderService.checkOrder(order).subscribe((orderId: string) => {
      this.orderService.clear();
      this.router.navigate(['/order-summary', orderId]);
    });
    console.log(order);
  }
}
