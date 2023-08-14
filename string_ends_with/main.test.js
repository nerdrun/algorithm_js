const solution = require('./main');

test('a, a returns false', () => {
  expect(solution('a', 'a')).toBe(true);
});

test('a, b returns false', () => {
  expect(solution('a', 'b')).toBe(false);
});

test('ab, b returns true', () => {
  expect(solution('ab', 'b')).toBe(true);
});

test('abc, bc returns true', () => {
  expect(solution('abc', 'bc')).toBe(true);
});

test('abcde, cde returns true', () => {
  expect(solution('abcde', 'cde')).toBe(true);
});

test('abcde, abc returns false', () => {
  expect(solution('abcde', 'abc')).toBe(false);
});