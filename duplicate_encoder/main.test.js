const duplicateEncode = require('./main');

test('a returns (', () => {
  expect(duplicateEncode('a')).toBe('(');
});

test('ab returns ((', () => {
  expect(duplicateEncode('ab')).toBe('((');
});

test('abc returns (((', () => {
  expect(duplicateEncode('abc')).toBe('(((');
});

test('aa returns ))', () => {
  expect(duplicateEncode('aa')).toBe('))');
});

test('aac returns ))(', () => {
  expect(duplicateEncode('aac')).toBe('))(');
});

test('acaa returns )())', () => {
  expect(duplicateEncode('acaa')).toBe(')())');
});


