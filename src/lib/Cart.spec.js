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
    expect(cart.getTotal()).toEqual(526);
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
    expect(cart.getTotal()).toEqual(263);
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
    expect(cart.getTotal()).toEqual(600);
  });
});
