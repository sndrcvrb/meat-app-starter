import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { CartItem } from './../../shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})

export class OrderItemsComponent implements OnInit {

  @Input() items: CartItem[];

  @Output() itemIncreaseQuantity = new EventEmitter<CartItem>();
  @Output() itemDecreaseQuantity = new EventEmitter<CartItem>();
  @Output() itemRemove = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit() {
  }

  emitItemIncreaseQuantity(item: CartItem) {
    this.itemIncreaseQuantity.emit(item);
  }

  emitItemDecreaseQuantity(item: CartItem) {
    this.itemDecreaseQuantity.emit(item);
  }

  emitItemRemove(item: CartItem) {
    this.itemRemove.emit(item);
  }

}
