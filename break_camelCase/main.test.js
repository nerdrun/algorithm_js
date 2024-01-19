const solution = require('./main');

test('the blank returns the blank', () => {
  expect(solution('')).toBe('');
});

test('identifier returns identifier', () => {
  expect(solution('identifier')).toBe('identifier');
});

test('camelCasing returns camel Casing', () => {
  expect(solution('camelCasing')).toBe('camel Casing');
});

test('camelCasingHelloWorld returns camel Casing Hello World', () => {
  expect(solution('camelCasingHelloWorld')).toBe('camel Casing Hello World');
});
