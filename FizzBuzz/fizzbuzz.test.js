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

  it('prints the digits from 1 to limit', () => {
    const expected = [1, 2];
    expect(fn(2)).toEqual(expect.arrayContaining(expected));
  });

  it('prints 3 correctly', () => {
    const expected = [1, 2, 'fizz'];
    expect(fn(3)).toEqual(expect.arrayContaining(expected));
  });

  it('prints buzz correctly', () => {
    const expected = [1, 2, 'fizz', 4, 'buzz'];
    expect(fn(5)).toEqual(expect.arrayContaining(expected));
  });
});
