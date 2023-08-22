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
test('a a a returns )))))', () => {
  expect(duplicateEncode('a a a')).toBe(')))))');
});
test('(((abc returns )))(((', () => {
  expect(duplicateEncode('(((abc')).toBe(')))(((');
});
test(' ( (  returns )))))', () => {
  expect(duplicateEncode(' ( ( ')).toBe(')))))');
});
test(')a)b  returns )()(', () => {
  expect(duplicateEncode(')a)b')).toBe(')()(');
});
test('din returns (((', () => {
  expect(duplicateEncode('din')).toBe('(((');
});
test('recede returns ()()()', () => {
  expect(duplicateEncode('recede')).toBe('()()()');
});
test('Success returns )())())', () => {
  expect(duplicateEncode('Success')).toBe(')())())');
});
test('(( @ returns ))((', () => {
  expect(duplicateEncode('(( @')).toBe('))((');
});
test('(() returns ))(', () => {
  expect(duplicateEncode('(()')).toBe('))(');
});
test(' ( ( ) returns )))))(', () => {
  expect(duplicateEncode(' ( ( )')).toBe(')))))(');
});
test('GaGGGG@y(GcIxuGP returns )())))((()(((()(', () => {
  expect(duplicateEncode('GaGGGG@y(GcIxuGP')).toBe(')())))((()(((()(');
});
