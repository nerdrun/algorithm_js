const { isMarker, findNextLineBreak, solution } = require('./main');

describe('Check marker test', () => {
  test('a is not a marker of #', () => {
    expect(isMarker('a', ['#'])).toBe(false);
  });

  test('# is a marker of #', () => {
    expect(isMarker('#', ['#'])).toBe(true);
  });

  test('b is a not marker of #,!', () => {
    expect(isMarker('b', ['#', '!'])).toBe(false);
  });

  test('! is a marker of #,!', () => {
    expect(isMarker('!', ['#', '!'])).toBe(true);
  });
});

describe('find the next index of \n', () => {
  test('the next index of abc\n is 3', () => {
    expect(findNextLineBreak('abc\n')).toBe(3);
  });

  test('the next index of abc is -1', () => {
    expect(findNextLineBreak('abc')).toBe(-1);
  });

  test('the next index of abcde\nabcde\n is 5', () => {
    expect(findNextLineBreak('abcde\nabcde\n')).toBe(5);
  });
});

describe('Strip comments', () => {
  test('a returns a', () => {
    expect(solution('a', ['#'])).toBe('a');
  });

  test('\n returns \n', () => {
    expect(solution('\n', ['#'])).toBe('\n');
  });

  test('a\n returns a\n', () => {
    expect(solution('a\n', ['#'])).toBe('a\n');
  });

  test('a# returns a', () => {
    expect(solution('a#', ['#'])).toBe('a');
  });

  test('a#hello returns a', () => {
    expect(solution('a#hello', ['#'])).toBe('a');
  });

  test('#hello returns ', () => {
    expect(solution('#hello', ['#'])).toBe('');
  });

  test('a#hello\nh returns a\nh', () => {
    expect(solution('a#hello\nh', ['#'])).toBe('a\nh');
  });

  test('a#hello\nhello\n#hi returns ahello', () => {
    expect(solution('a#hello\nhello\n#hi', ['#'])).toBe('a\nhello\n');
  });

  test('aa bb cc   returns ahello', () => {
    expect(solution('aa bb cc  ', ['#'])).toBe('aa bb cc');
  });

  test('aa bb # cc returns aa bb', () => {
    expect(solution('aa bb # cc', ['#'])).toBe('aa bb');
  });

  test('aa# bb cc returns aa', () => {
    expect(solution('aa# bb cc', ['#'])).toBe('aa');
  });

  test('aa # bb\ncc dd return aa\ncc dd', () => {
    expect(solution('aa # bb\ncc dd', ['#'])).toBe('aa\ncc dd');
  });

  test('no markers return the original text', () => {
    expect(solution('aa # bb # cc', [])).toBe('aa # bb # cc');
  });

  test('apples, pears # and bananas\n returns apples, pears\n', () => {
    expect(solution('apples, pears # and bananas\n', ['#','!'])).toBe('apples, pears\n');
  });

  test('aa # bb # cc returns aa', () => {
    expect(solution('aa # bb # cc', ['#','!'])).toBe('aa');
  });

  test('apples, pears # and bananas\ngrapes\nbananas !apples returns apples, pears\ngrapes\nbananas', () => {
    expect(solution('apples, pears # and bananas\ngrapes\nbananas !apples', ['#','!'])).toBe('apples, pears\ngrapes\nbananas');
  });
});