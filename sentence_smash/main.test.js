const smash = require('./main');

test('string array [a] returns string a', () => {
  expect(smash(['a'])).toBe('a');
});

test('string array [b] returns string b', () => {
  expect(smash(['b'])).toBe('b');
});

test('string array [a, b] returns string a b', () => {
  expect(smash(['a', 'b'])).toBe('a b');
});

test('string array ["hello", "world"] returns string hello world', () => {
  expect(smash(['hello', 'world'])).toBe('hello world');
});

test('string array ["this", "is", "a", "really", "long", "sentence"] returns string this is a really long sentence', () => {
  expect(smash(['this', 'is', 'a', 'really', 'long', 'sentence'])).toBe('this is a really long sentence');
});