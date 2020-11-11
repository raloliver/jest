const {queryString} = require('./queryString');

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Roger Rabbit',
      company: 'ACME',
    };
    expect(queryString(obj)).toBe('name=Roger Rabbit&company=ACME');
  });
});
