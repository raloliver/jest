/*
 * File: discount.utils.js
 * Project: jest-app
 * Created: Friday, June 18th 2021, 3:21:44 pm
 * Last Modified: Friday, June 18th 2021, 3:23:35 pm
 * Copyright © 2021 AMDE Agência
 */
import Dinero from 'dinero.js';

const Money = Dinero;

Money.defaultCurrency = 'EUR';
Money.defaultPrecision = 2;

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

export const calculateDiscount = (amount, quantity, condition) => {
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
