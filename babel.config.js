/*
 * File: babel.config.js
 * Project: jest-app
 * Created: Thursday, March 11th 2021, 5:12:26 pm
 * Last Modified: Tuesday, June 15th 2021, 5:37:40 pm
 * Copyright © 2021 AMDE Agência
 */

module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
  plugins: [
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ],
  ],
};
