const stringToNumber = require('./main')

test('"1" returns 1', () => {
  expect(stringToNumber('1')).toBe(1);
})

test('2 returns 2', () => {
  expect(stringToNumber('2')).toBe(2);
})

test('abc returns NaN', () => {
  expect(stringToNumber('abc')).toBe(NaN);
})

test('"-7" returns -7', () => {
  expect(stringToNumber('-7')).toBe(-7);
})