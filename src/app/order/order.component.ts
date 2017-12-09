import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
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
  orderForm: FormGroup;

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  numberPattern = /^[0-9]*$/;

  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'DIN' },
    { label: 'Cartão de crédito', value: 'CRE' },
    { label: 'Vale Refeição', value: 'REF' }
  ];

  shippingFee = 8;

  constructor(
    private orderService: OrderService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.orderForm = this.fb.group(
      {
        name: this.fb.control('', [
          Validators.required,
          Validators.minLength(5)
        ]),
        email: this.fb.control('', [
          Validators.required,
          Validators.pattern(this.emailPattern)
        ]),
        emailConfirmation: this.fb.control('', [
          Validators.required,
          Validators.pattern(this.emailPattern)
        ]),
        address: this.fb.control('', [
          Validators.required,
          Validators.minLength(5)
        ]),
        number: this.fb.control('', [
          Validators.required,
          Validators.pattern(this.numberPattern)
        ]),
        complement: this.fb.control(''),
        paymentOption: this.fb.control('', [Validators.required])
      },
      { validator: OrderComponent.validateEmail }
    );
  }

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

  static validateEmail(group: AbstractControl): { [key: string]: boolean } {
    const email = group.get('email');
    const emailConfirmation = group.get('emailConfirmation');

    if (!email || !emailConfirmation) {
      return undefined;
    }

    if (email.value !== emailConfirmation.value) {
      return { 'emailsDoNotMatch': true };
    }

    return undefined;
  }
}
