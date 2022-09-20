const fn = require('./function');

describe('fn that removes duplicate numbers from an array', () => {
  test('accepts 1 array as a parameter', () => {
    expect(() => {
      fn('hello');
    }).toThrow();

    expect(() => {
      fn();
    }).toThrow();

    expect(() => {
      fn(2);
    }).toThrow();

    expect(() => {
      fn([], []);
    }).toThrow();

    expect(() => {
      fn([]);
    }).not.toThrow();
  });
});
