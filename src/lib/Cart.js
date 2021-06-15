/*
 * File: Cart.js
 * Project: jest-app
 * Created: Thursday, March 11th 2021, 5:12:26 pm
 * Last Modified: Tuesday, June 15th 2021, 5:54:52 pm
 * Copyright © 2021 AMDE Agência
 */

import find from 'lodash/find';
import remove from 'lodash/remove';

import Dinero from 'dinero.js';

const Money = Dinero;

Money.defaultCurrency = 'EUR';
Money.defaultPrecision = 2;

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
    const total = this.getTotal().getAmount();
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
      const amount = Money({amount: item.quantity * item.product.price});
      let discount = Money({amount: 0});

      if (
        item.condition &&
        item.condition.percentage &&
        item.quantity > item.condition.minimum
      ) {
        discount = amount.percentage(item.condition.percentage);
      }

      return acc.add(amount).subtract(discount);
    }, Money({amount: 0}));
  }
}
