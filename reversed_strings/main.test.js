const solution = require('./main');

test('a returns a', () => {
  expect(solution('a')).toBe('a');
});

test('b returns b', () => {
  expect(solution('b')).toBe('b');
});

test('ab returns ba', () => {
  expect(solution('ab')).toBe('ba');
});

test('abc returns cba', () => {
  expect(solution('abc')).toBe('cba');
});

test('world returns dlrow', () => {
  expect(solution('world')).toBe('dlrow');
});