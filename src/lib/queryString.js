/*
 * File: queryString.js
 * Project: jest-app
 * Created: Thursday, March 11th 2021, 5:12:26 pm
 * Last Modified: Tuesday, June 15th 2021, 5:37:04 pm
 * Copyright © 2021 AMDE Agência
 */

const keyValueToString = ([key, value]) => {
  // needs to be an object and not e array
  if (typeof value === 'object' && !Array.isArray(value)) {
    throw new Error('We only accepted primitive arrays.');
  }
  return `${key}=${value}`;
};

export function queryString(obj) {
  return Object.entries(obj).map(keyValueToString).join('&');
}

export function parseQueryString(string) {
  return Object.fromEntries(
    string.split('&').map(item => {
      let [key, value] = item.split('=');

      if (value.indexOf(',') > -1) {
        value = value.split(',');
      }

      return [key, value];
    }),
  );
}
