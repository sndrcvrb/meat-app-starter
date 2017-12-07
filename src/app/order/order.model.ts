class OrderItem {
  constructor(public quantity: number, public menuId: string) {}
}

class Order {

  id?: string;

  constructor(
    public address: string,
    public number: number,
    public complement: string,
    public orderItems: OrderItem[] = []
  ) {}
}

export { Order, OrderItem }
