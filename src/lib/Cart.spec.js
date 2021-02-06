import Cart from './Cart';

describe('Cart', () => {
  let cart;
  let product = {
    title: 'Nintendo Switch',
    price: 26325,
  };

  let product1 = {
    title: 'Óculos Rift',
    price: 300000,
  };

  beforeEach(() => {
    cart = new Cart();
  });

  it('should return 0 when getTotal() init', () => {
    const cart = new Cart();
    expect(cart.getTotal()).toEqual(0);
  });

  it('should multiply quantity and price and return the total amount', () => {
    const item = {
      product,
      quantity: 2,
    };

    cart.add(item);
    expect(cart.getTotal()).toEqual(52650);
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
    expect(cart.getTotal()).toEqual(26325);
  });
});
