import { MenuItem } from './../restaurants/restaurant/restaurant-detail/menu/menu-item/menu-item.model';

export class CartItem {

  constructor(public menuItem: MenuItem, public quantity = 1) {
  }

  value(): number {
    return this.menuItem.price * this.quantity;
  }

}
