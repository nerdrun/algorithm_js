const count = require('./main');

describe('empty string test', () => {
  test('if empty string passed it returns literal {}', () => {
    expect(count('')).toStrictEqual({});
  });
});

describe('count test', () => {
  test('a returns { a : 1 }', () => {
    expect(count('a')).toStrictEqual({ a : 1 });
  });
  test('aaa returns { a : 3 }', () => {
    expect(count('aaa')).toStrictEqual({ a : 3 });
  });
  test('abc returns { a : 1, b : 1, c : 1 }', () => {
    expect(count('abc')).toStrictEqual({ a : 1, b : 1, c : 1 });
  });
});