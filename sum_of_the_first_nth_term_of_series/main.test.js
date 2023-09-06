const SeriesSum = require('./main');

/// when the parameter is 0.

describe('When the parameter is 0', () => {
  test('if 0 returns 0.00 as string', () => {
    expect(SeriesSum(0)).toBe('0.00');
  });
});

describe('Sum series test', () => {
  test('if 1 returns 1.00 as string', () => {
    expect(SeriesSum(1)).toBe('1.00');
  });
  test('if 2 returns 1.25 as string', () => {
    expect(SeriesSum(2)).toBe('1.25');
  });
  test('if 3 returns 1.39 as string', () => {
    expect(SeriesSum(3)).toBe('1.39');
  });
  test('if 4 returns 1.49 as string', () => {
    expect(SeriesSum(4)).toBe('1.49');
  });
});