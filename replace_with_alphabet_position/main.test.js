const alphabetPosition = require('./main');

test('a returns 1', () => {
  expect(alphabetPosition('a')).toBe('1');
});

test('abc returns 123', () => {
  expect(alphabetPosition('abc')).toBe('1 2 3');
});

test('The sunset returns 20 8 5 19 21 14 19 5 20', () => {
  expect(alphabetPosition('The sunset')).toBe('20 8 5 19 21 14 19 5 20');
});

test('twelve o\' clock. returns 20 23 5 12 22 5 15 3 12 15 3 11', () => {
  expect(alphabetPosition('twelve o\' clock.')).toBe('20 23 5 12 22 5 15 3 12 15 3 11');
});