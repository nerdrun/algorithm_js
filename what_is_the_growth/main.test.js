const getGrowth = require('./main');

describe('test the difference between current and previous value', () => {
  test('1 returns 0', () => {
    expect(getGrowth(1)).toBe('(+0, +0%)');
  });
  test('1, 2 returns 1', () => {
    expect(getGrowth(1, 2)).toBe('(+1, +100%)');
  });
  test('1, 2, 4 returns 2', () => {
    expect(getGrowth(1, 2, 4)).toBe('(+2, +100%)');
  });
});

describe('test the rounded percentual difference between current and previous value', () => {
  test('1 returns (+0, +0%)', () => {
    expect(getGrowth(1)).toBe('(+0, +0%)');
  });
  test('1, 4, 2 returns (-2, -50%)', () => {
    expect(getGrowth(1,4,2)).toBe('(-2, -50%)');
  });
});