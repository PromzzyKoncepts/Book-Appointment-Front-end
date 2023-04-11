// eslint-disable-next-line no-unused-vars
const polyfill = require('polyfill');
require('jest-localstorage-mock');

global.matchMedia = global.matchMedia
  || function () {
    return {
      matches: false,
      addListener() {},
      removeListener() {},
    };
  };

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;
