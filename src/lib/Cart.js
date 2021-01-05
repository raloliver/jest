import find from 'lodash/find';
import remove from 'lodash/remove';

export default class Cart {
  items = [];

  add(item) {
    const itemDuplicated = {product: item.product};

    if (find(this.items, itemDuplicated)) {
      remove(this.items, itemDuplicated);
    }

    this.items.push(item);
  }

  getTotal() {
    return this.items.reduce((acc, item) => {
      return acc + item.quantity * item.product.price;
    }, 0);
  }
}
