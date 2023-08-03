const longest = require('./main');

describe('to combine s1, s2', () => {
  test('s1 a, s2 b returns ab', () => {
    expect(longest('a', 'b')).toBe('ab');
  });

  test('s1 a, s2 bc returns abc', () => {
    expect(longest('a', 'bc')).toBe('abc');
  });
});

describe('to remove duplication between s1 s2', () => {
  test('s1 abc, s2 a returns abc', () => {
    expect(longest('abc', 'a')).toBe('abc');
  });

  test('s1 abc, s2 ab returns abc', () => {
    expect(longest('abc', 'ab')).toBe('abc');
  });

  test('s1 a, s2 ab returns ab', () => {
    expect(longest('a', 'ab')).toBe('ab');
  });

  test('s1 a, s2 abc returns abc', () => {
    expect(longest('a', 'abc')).toBe('abc');
  });

  test('s1 ab, s2 ab returns ab', () => {
    expect(longest('ab', 'ab')).toBe('ab');
  });

  test('s1 abcdefghi, s2 cdefghij returns abcdefghij', () => {
    expect(longest('abcdefghi', 'cdefghij')).toBe('abcdefghij');
  });

  test('s1 aeee, s2 a returns ae', () => {
    expect(longest('aeee', 'a')).toBe('ae');
  });
});

describe('to sort result', () => {
  test('s1 gfedcba, s2 zyx returns abcdefgxyz', () => {
    expect(longest('gfedcba', 'zyx')).toBe('abcdefgxyz');
  });

  test('s1 aretheyhere, s2 yestheyarehere returns aehrsty', () => {
    expect(longest('aretheyhere', 'yestheyarehere')).toBe('aehrsty');
  });

  test('s1 loopingisfunbutdangerous, s2 lessdangerousthancoding returns abcdefghilnoprstu', () => {
    expect(longest('loopingisfunbutdangerous', 'lessdangerousthancoding')).toBe('abcdefghilnoprstu');
  });

  test('s1 inmanylanguages, s2 theresapairoffunctions returns acefghilmnoprstuy', () => {
    expect(longest('inmanylanguages', 'theresapairoffunctions')).toBe('acefghilmnoprstuy');
  });
});
