const removeExclamationMarks = require('./main');

test('empty string returns empty string', () => {
  expect(removeExclamationMarks('')).toBe('');
});

test('hello returns hello', () => {
  expect(removeExclamationMarks('hello')).toBe('hello');
});

test('one exclamation returns empty string', () => {
  expect(removeExclamationMarks('!')).toBe('');
});

test('h! returns h', () => {
  expect(removeExclamationMarks('h!')).toBe('h');
});

test('Hello World! returns Hello World', () => {
  expect(removeExclamationMarks('Hello World!')).toBe('Hello World');
});