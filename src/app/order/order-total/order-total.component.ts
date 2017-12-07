import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mt-order-total',
  templateUrl: './order-total.component.html'
})
export class OrderTotalComponent implements OnInit {

  @Input() shippingFee: number;
  @Input() itemsValue: number;

  constructor() { }

  ngOnInit() {
  }

  total(): number {
    return this.shippingFee + this.itemsValue;
  }

}
