const disemvowel = require('./main');

test('a vowel must be removed', () => {
  expect(disemvowel('a')).toBe('');
});

test('e vowel must be removed', () => {
  expect(disemvowel('e')).toBe('');
});

test('i vowel must be removed', () => {
  expect(disemvowel('i')).toBe('');
});

test('aies returns s', () => {
  expect(disemvowel('aies')).toBe('s');
});

test('If there is uppercase vowel, it must be removed as well.', () => {
  expect(disemvowel('WhAt')).toBe('Wht');
});

test('This website is for losers LOL! vowel must be removed', () => {
  expect(disemvowel('This website is for losers LOL!')).toBe('Ths wbst s fr lsrs LL!');
});