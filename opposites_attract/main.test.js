const lovefunc = require('./main');

test('0, 0 returns false', () => {
  expect(lovefunc(0, 0)).toBe(false);
});

test('1, 0 returns true', () => {
  expect(lovefunc(1, 0)).toBe(true);
});

test('1, 4 returns true', () => {
  expect(lovefunc(1, 4)).toBe(true);
});

test('2, 2 returns false', () => {
  expect(lovefunc(2, 2)).toBe(false);
});