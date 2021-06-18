/*
 * File: calculator.spec.js
 * Project: jest-app
 * Created: Thursday, March 11th 2021, 5:12:26 pm
 * Last Modified: Tuesday, June 15th 2021, 5:37:13 pm
 * Copyright © 2021 AMDE Agência
 */

import { sum } from './calculator';

it('should sum 2 and 2 and the result must be 4', () => {
  expect(sum(2, 2)).toBe(4);
});

it('should sum 2 and 2 and the result must be 4 even the argument value is a string', () => {
  expect(sum('2', '2')).toBe(4);
});

it('should throw an error if what is provided to the method cannot be summed', () => {
  expect(() => sum('', '2')).toThrowError();
  expect(() => sum([2, 2])).toThrowError();
  expect(() => sum({})).toThrowError();
  expect(() => sum()).toThrowError();
});
