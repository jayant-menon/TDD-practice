const fn = require('./fizzbuzz');

describe('creating fizzbuzz', () => {
  it('requires a number argument', () => {
    expect(() => {
      fn('hello');
    }).toThrow();

    expect(() => {
      fn();
    }).toThrow();

    expect(() => {
      fn(true);
    }).toThrow();
  });
});
