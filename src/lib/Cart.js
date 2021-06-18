/*
 * File: Cart.js
 * Project: jest-app
 * Created: Thursday, March 11th 2021, 5:12:26 pm
 * Last Modified: Friday, June 18th 2021, 3:10:41 pm
 * Copyright © 2021 AMDE Agência
 */

import find from 'lodash/find';
import remove from 'lodash/remove';
import Dinero from 'dinero.js';

const calculateDiscountByPercentage = (amount, {condition, quantity}) => {
  if (condition?.percentage && quantity > condition.minimum) {
    return amount.percentage(condition.percentage);
  }

  return Money({amount: 0});
};

const calculateDiscountByQuantity = (amount, {condition, quantity}) => {
  const isEven = quantity % 2 === 0;

  if (condition?.quantity && quantity > condition.quantity) {
    return amount.percentage(isEven ? 50 : 40);
  }

  return Money({amount: 0});
};

const calculateDiscount = (amount, quantity, condition) => {
  const conditionList = Array.isArray(condition) ? condition : [condition];

  const [higherDiscount] = conditionList
    .map(conditionItem => {
      if (conditionItem.percentage) {
        return calculateDiscountByPercentage(amount, {
          condition: conditionItem,
          quantity,
        }).getAmount();
      } else if (conditionItem.quantity) {
        return calculateDiscountByQuantity(amount, {
          condition: conditionItem,
          quantity,
        }).getAmount();
      }
    })
    .sort((discount1, discount2) => discount2 - discount1);

  return Money({amount: higherDiscount});
};

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
    return this.items.reduce((acc, {quantity, product, condition}) => {
      const amount = Money({amount: quantity * product.price});
      let discount = Money({amount: 0});

      if (condition) {
        discount = calculateDiscount(amount, quantity, condition);
      }

      return acc.add(amount).subtract(discount);
    }, Money({amount: 0}));
  }
}
