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

  remove(product) {
    remove(this.items, {product});
  }

  summary() {
    const total = this.getTotal();
    const items = this.items;

    return {
      total,
      items,
    };
  }

  checkout() {
    const {total, items} = this.summary();

    this.items = [];

    return {
      total,
      items,
    };
  }

  getTotal() {
    return this.items.reduce((acc, item) => {
      return acc + item.quantity * item.product.price;
    }, 0);
  }
}
