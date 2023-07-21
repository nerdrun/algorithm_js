const evenOrOdd = require('./main');

test('1 is Odd', () => {
  expect(evenOrOdd(1)).toBe('Odd');
});

test('2 is Even', () => {
  expect(evenOrOdd(2)).toBe('Even');
});

test('3 is Odd', () => {
  expect(evenOrOdd(3)).toBe('Odd');
});

test('4 is Even', () => {
  expect(evenOrOdd(4)).toBe('Even');
});

test('12 is Even', () => {
  expect(evenOrOdd(12)).toBe('Even');
});

test('19 is Odd', () => {
  expect(evenOrOdd(19)).toBe('Odd');
});

test('-42 is Even', () => {
  expect(evenOrOdd(-42)).toBe('Even');
});