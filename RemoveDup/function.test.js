const fn = require('./function');

describe('fn that removes duplicates from an array', () => {
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

  it('removes duplicates from an array', () => {
    const expected = [1, 2, 3, 4];
    expect(fn([1, 2, 3, 3, 4])).toEqual(expected);
  });
});
