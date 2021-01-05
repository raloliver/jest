import Cart from './Cart';

describe('Cart', () => {
  let cart;
  beforeEach(() => {
    cart = new Cart();
  });
  it('should return 0 when getTotal() init', () => {
    const cart = new Cart();
    expect(cart.getTotal()).toEqual(0);
  });
  it('should multiply quantity and price and return the total amount', () => {
    const item = {
      product: {
        title: 'Nintendo Switch',
        price: 26325,
      },
      quantity: 2,
    };

    cart.add(item);
    expect(cart.getTotal()).toEqual(52650);
  });
});
