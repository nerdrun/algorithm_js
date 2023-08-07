const number = require('./main');

describe('', () => {
  test('[[0, 0]] returns 0', () => {
    expect(number([[0, 0]])).toBe(0);
  });

  test('[[1, 0]] returns 0', () => {
    expect(number([[1, 0]])).toBe(1);
  });

  test('[[1, 1]] returns 0', () => {
    expect(number([[1, 1]])).toBe(0);
  });

  test('[[1, 1],[2, 1]] returns 1', () => {
    expect(number([[1, 1],[2, 1]])).toBe(1);
  });

  test('[[10,0],[3,5],[5,8]] returns 5', () => {
    expect(number([[10,0],[3,5],[5,8]])).toBe(5);
  });

  test('[[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]] returns 17', () => {
    expect(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])).toBe(17);
  });

  test('[[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]] returns 21', () => {
    expect(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])).toBe(21);
  });
});