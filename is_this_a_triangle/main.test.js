const isTriangle = require('./main');

describe('negative test', () => {
  test('-1, 1, 1 returns false', () => {
    expect(isTriangle(-1, 1, 1)).toBe(false);
  });
  test('1, 2, 2 returns true', () => {
    expect(isTriangle(1, 2, 2)).toBe(true);
  });
});

describe('find the biggest number', () => {
  test('3, 2, 2 returns true', () => {
    expect(isTriangle(3, 2, 2)).toBe(true);
  });
  test('7, 5, 1 returns false', () => {
    expect(isTriangle(7, 5, 1)).toBe(false);
  });
  test('2, 4, 6 returns false', () => {
    expect(isTriangle(2, 4, 6)).toBe(false);
  });
  test('10, 1, 8 returns false', () => {
    expect(isTriangle(10, 1, 8)).toBe(false);
  });
});