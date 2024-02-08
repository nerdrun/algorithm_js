const neutralise = require('./main');

test('+ 와 - 가 만나면 0을 리턴', () => {
  expect(neutralise('+', '-')).toBe('0');
});

test('+ 와 + 가 만나면 +를 리턴', () => {
  expect(neutralise('+', '+')).toBe('+');
});

test('- 와 - 가 만나면 -를 리턴', () => {
  expect(neutralise('-', '-')).toBe('-');
});

test('-- 와 -- 가 만나면 --를 리턴', () => {
  expect(neutralise('--', '--')).toBe('--');
});

test('++ 와 ++ 가 만나면 ++를 리턴', () => {
  expect(neutralise('++', '++')).toBe('++');
});

test('--- 와 --- 가 만나면 ---를 리턴', () => {
  expect(neutralise('---', '---')).toBe('---');
});