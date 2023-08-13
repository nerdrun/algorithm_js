const getMiddle = require('./main');

test('h returns h', () => {
  expect(getMiddle('h')).toBe('h');
});

test('ha returns ha', () => {
  expect(getMiddle('ha')).toBe('ha');
});

test('jol returns o', () => {
  expect(getMiddle('jol')).toBe('o');
});

test('jolly returns l', () => {
  expect(getMiddle('jolly')).toBe('l');
});

test('barrel returns rr', () => {
  expect(getMiddle('barrel')).toBe('rr');
});

test('A returns A', () => {
  expect(getMiddle('A')).toBe('A');
});

test('test returns es', () => {
  expect(getMiddle('test')).toBe('es');
});

test('middle returns dd', () => {
  expect(getMiddle('middle')).toBe('dd');
});

test('testing returns t', () => {
  expect(getMiddle('testing')).toBe('t');
});