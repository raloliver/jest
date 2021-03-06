/*
 * File: calculator.js
 * Project: jest-app
 * Created: Thursday, March 11th 2021, 5:12:26 pm
 * Last Modified: Tuesday, June 15th 2021, 5:37:26 pm
 * Copyright © 2021 AMDE Agência
 */

export function sum(num1, num2) {
  // when you use + instead parseInt, the empty string was converted in a 0
  const Num1 = parseInt(num1, 10);
  const Num2 = parseInt(num2, 10);
  //verify if number exists
  if (Number.isNaN(Num1) || Number.isNaN(Num2)) {
    throw new Error('Check input');
  }

  // add + before variable to convert in a number
  return Num1 + Num2;
}
