const rot13 = require('./main');

describe('13 rotation tests with one letter', () => {
  test('a returns n', () => {
    expect(rot13('a')).toBe('n');
  });

  test('b returns o', () => {
    expect(rot13('b')).toBe('o');
  });

  test('c returns p', () => {
    expect(rot13('c')).toBe('p');
  });
});

describe('13 rotation tests with more than one letter', () => {
  test('ab returns no', () => {
    expect(rot13('ab')).toBe('no');
  });

  test('fl returns sy', () => {
    expect(rot13('fl')).toBe('sy');
  });

  test('hello returns uryyb', () => {
    expect(rot13('hello')).toBe('uryyb');
  });
});

describe('13 rotation tests with capital letter', () => {
  test('A returns N', () => {
    expect(rot13('A')).toBe('N');
  });

  test('AN returns NA', () => {
    expect(rot13('AN')).toBe('NA');
  });
});

describe('13 rotation ignores spaces and punctuation, numbers, etc', () => {
  test('A C returns N P', () => {
    expect(rot13('A C')).toBe('N P');
  });

  test('..." returns EBG13 ...', () => {
    expect(rot13('...')).toBe('...');
  });

  test('@# $ %." returns @# $ %.', () => {
    expect(rot13('@# $ %.')).toBe('@# $ %.');
  });
});

describe('13 rotation tests with all combinations', () => {
  test('ROT13 example. returns EBG13 rknzcyr.', () => {
    expect(rot13('ROT13 example.')).toBe('EBG13 rknzcyr.');
  });

  test('This is my first ROT13 excercise! returns Guvf vf zl svefg EBG13 rkprepvfr!', () => {
    expect(rot13('This is my first ROT13 excercise!')).toBe('Guvf vf zl svefg EBG13 rkprepvfr!');
  });
});