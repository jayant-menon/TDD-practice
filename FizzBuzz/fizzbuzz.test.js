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

  it('takes only 1 argument', () => {
    expect(() => {
      fn('hello', 'world');
    }).toThrow();

    expect(() => {
      fn();
    }).toThrow();

    expect(() => {
      fn(32);
    }).not.toThrow();

    expect(() => {
      fn(32, 33);
    }).toThrow();
  });

  test('number is an integer', () => {
    expect(() => {
      fn(-32);
    }).toThrow();

    expect(() => {
      fn(32);
    }).not.toThrow();
  });
});
