const getGrowth = require('./main');

describe('test the difference between current and previous value', () => {
  test('1', () => {
    expect(getGrowth(1)).toBe('1 (+0, +0%)');
  });
  test('1, 2', () => {
    expect(getGrowth(1, 2)).toBe('1 (+0, +0%), 2 (+1, +100%)');
  });
  test('1, 2, 3', () => {
    expect(getGrowth(1, 2, 3)).toBe('1 (+0, +0%), 2 (+1, +100%), 3 (+1, +50%)');
  });
  test('1, 2, 4', () => {
    expect(getGrowth(1, 2, 4)).toBe('1 (+0, +0%), 2 (+1, +100%), 4 (+2, +100%)');
  });
  test('1, 4, 2', () => {
    expect(getGrowth(1, 4, 2)).toBe('1 (+0, +0%), 4 (+3, +300%), 2 (-2, -50%)');
  });
});