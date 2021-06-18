/*
 * File: Cart.spec.js
 * Project: jest-app
 * Created: Thursday, March 11th 2021, 5:12:26 pm
 * Last Modified: Friday, June 18th 2021, 3:19:03 pm
 * Copyright © 2021 AMDE Agência
 */

import Cart from './Cart';

describe('Cart', () => {
  let cart;
  let product = {
    title: 'Nintendo Switch',
    price: 263,
  };

  let product1 = {
    title: 'Óculos Rift',
    price: 300,
  };

  beforeEach(() => {
    cart = new Cart();
  });

  describe('getTotal()', () => {
    it('should return 0 when getTotal() init', () => {
      const cart = new Cart();
      expect(cart.getTotal().getAmount()).toEqual(0);
    });

    it('should multiply quantity and price and return the total amount', () => {
      const item = {
        product,
        quantity: 2,
      };

      cart.add(item);
      expect(cart.getTotal().getAmount()).toEqual(526);
    });

    it('should ensure only one type of product on the cart', () => {
      cart.add({
        product,
        quantity: 2,
      });
      cart.add({
        product,
        quantity: 1,
      });
      expect(cart.getTotal().getAmount()).toEqual(263);
    });

    it('should update total when a product gets included and then removed', () => {
      cart.add({
        product,
        quantity: 2,
      });
      cart.add({
        product: product1,
        quantity: 2,
      });
      cart.remove(product);
      expect(cart.getTotal().getAmount()).toEqual(600);
    });
  });

  describe('checkout', () => {
    it('should return an object with the total and the items', () => {
      cart.add({
        product,
        quantity: 2,
      });
      cart.add({
        product: product1,
        quantity: 5,
      });
      expect(cart.checkout()).toMatchSnapshot();
    });
    it('should return an object with the total and the items when summary()', () => {
      cart.add({
        product,
        quantity: 2,
      });
      cart.add({
        product: product1,
        quantity: 1,
      });
      expect(cart.summary()).toMatchSnapshot();
      expect(cart.getTotal().getAmount()).toBeGreaterThan(0);
    });
    it('should include formatted amount in the summary', () => {
      cart.add({
        product,
        quantity: 2,
      });
      cart.add({
        product: product1,
        quantity: 1,
      });

      expect(cart.summary().formatted).toEqual('€8.26');
    });
    it('should reset the cart properly', () => {
      cart.add({
        product: product,
        quantity: 1,
      });
      cart.checkout();
      expect(cart.getTotal().getAmount()).toEqual(0);
    });
  });

  describe('special promos', () => {
    it('should apply discount when is above mininum', () => {
      const condition = {
        percentage: 10,
        minimum: 2,
      };

      cart.add({
        product,
        condition,
        quantity: 3,
      });

      expect(cart.getTotal().getAmount()).toEqual(710);
    });

    it('should NOT apply discount when quantity is below or equals to mininum', () => {
      const condition = {
        percentage: 10,
        minimum: 2,
      };

      cart.add({
        product,
        condition,
        quantity: 2,
      });

      expect(cart.getTotal().getAmount()).toEqual(526);
    });

    it('should apply quantity discount for even quantities', () => {
      const condition = {
        quantity: 2,
      };

      cart.add({
        product,
        condition,
        quantity: 4,
      });

      expect(cart.getTotal().getAmount()).toEqual(526);
    });

    it('should apply discount for odd quantities', () => {
      const condition = {
        quantity: 2,
      };

      cart.add({
        product,
        condition,
        quantity: 5,
      });

      expect(cart.getTotal().getAmount()).toEqual(789);
    });

    it('should not apply quantity discount for even quantities when the condition is not met', () => {
      const condition = {
        quantity: 2,
      };

      cart.add({
        product,
        condition,
        quantity: 1,
      });

      expect(cart.getTotal().getAmount()).toEqual(263);
    });

    it('should determine the best discount with two or more conditions', () => {
      const condition1 = {
        percentage: 10,
        minimum: 2,
      };

      const condition2 = {
        quantity: 2,
      };

      cart.add({
        product,
        condition: [condition1, condition2],
        quantity: 5,
      });

      expect(cart.getTotal().getAmount()).toEqual(789);
    });
  });
});
