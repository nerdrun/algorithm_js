const duplicateEncode = require('./main');

/// lowercase test []
/// duplication syllable test []
/// encoding test []

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

test('aacc returns ))))', () => {
  expect(duplicateEncode('aacc')).toBe('))))');
});

// test('din returns (((', () => {
//   expect(duplicateEncode('din')).toBe('(((');
// });

// test('diin returns )', () => {
//   expect(duplicateEncode('diin')).toBe('(((');
// });


