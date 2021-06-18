/*
 * File: queryString.spec.js
 * Project: jest-app
 * Created: Thursday, March 11th 2021, 5:12:26 pm
 * Last Modified: Tuesday, June 15th 2021, 5:37:07 pm
 * Copyright © 2021 AMDE Agência
 */

import { queryString, parseQueryString } from './queryString';

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Roger Rabbit',
      company: 'ACME',
    };

    expect(queryString(obj)).toBe('name=Roger Rabbit&company=ACME');
  });

  it('should create a valid query string when an array is provided', () => {
    const obj = {
      name: 'Roger Rabbit',
      company: 'ACME',
      personality: ['zany', 'kind-hearted', 'humorous', 'energetic'],
    };

    expect(queryString(obj)).toBe(
      'name=Roger Rabbit&company=ACME&personality=zany,kind-hearted,humorous,energetic',
    );
  });

  it('should throw an error if object is passed as value', () => {
    const obj = {
      name: 'Roger Rabbit',
      company: 'ACME',
      personality: {
        0: 'zany',
        1: 'kind-hearted',
        2: 'humorous',
        3: 'energetic',
      },
    };

    expect(() => queryString(obj)).toThrowError();
  });
});

describe('Query string to object', () => {
  it('should convert a query string to object', () => {
    const query = 'name=Roger Rabbit&company=ACME';

    expect(parseQueryString(query)).toEqual({
      name: 'Roger Rabbit',
      company: 'ACME',
    });
  });

  it('should convert a query string to object with a single prop', () => {
    const query = 'name=Roger Rabbit';

    expect(parseQueryString(query)).toEqual({
      name: 'Roger Rabbit',
    });
  });

  it('should convert a query string to object separated by commas', () => {
    const query =
      'name=Roger Rabbit&company=ACME&personality=zany,kind-hearted,humorous,energetic';

    expect(parseQueryString(query)).toEqual({
      name: 'Roger Rabbit',
      company: 'ACME',
      personality: ['zany', 'kind-hearted', 'humorous', 'energetic'],
    });
  });
});
