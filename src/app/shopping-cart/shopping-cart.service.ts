import { MenuItem } from '../restaurants/restaurant/restaurant-detail/menu/menu-item/menu-item.model';
import { CartItem } from './cart-item.model';

export class ShoppingCartService {
  items: CartItem[] = [];

  clear() {
    this.items = [];
  }

  total(): number {
    return this.items
      .map(item => item.value())
      .reduce((prev, value) => prev + value, 0);
  }

  addItem(menuItem: MenuItem) {
    let foundItem = this.items.find(i => i.menuItem.id === menuItem.id);
    if (foundItem) {
      this.increaseQuantity(foundItem);
    } else {
      this.items.push(new CartItem(menuItem));
    }
  }

  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  increaseQuantity(item: CartItem) {
    item.quantity++;
  }

  decreaseQuantity(item: CartItem) {
    item.quantity--;

    if (item.quantity <= 0) {
      this.removeItem(item);
    }
  }
}
