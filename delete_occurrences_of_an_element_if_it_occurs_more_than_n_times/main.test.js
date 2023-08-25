const deleteNth = require('./main');

test('that input [1], 1 returns [1]', () => {
  expect(deleteNth([1], 1)).toStrictEqual([1]);
});

test('that input [1, 1], 1 returns [1]', () => {
  expect(deleteNth([1, 1], 1)).toStrictEqual([1]);
});

test('that input [2], 2 returns [2]', () => {
  expect(deleteNth([2], 2)).toStrictEqual([2]);
});

test('that input [2, 2], 2 returns [2, 2]', () => {
  expect(deleteNth([2, 2], 2)).toStrictEqual([2, 2]);
});

test('that input [2, 1, 1], 1 returns [2, 1]', () => {
  expect(deleteNth([2, 1, 1], 1)).toStrictEqual([2, 1]);
});

test('that input [3, 2, 2, 2], 2 returns [3, 2, 2]', () => {
  expect(deleteNth([3, 2, 2, 2], 2)).toStrictEqual([3, 2, 2]);
});

test('that input [3, 2, 2, 1], 1 returns [3, 2, 1]', () => {
  expect(deleteNth([3, 2, 2, 1], 1)).toStrictEqual([3, 2, 1]);
});

test('that input [20, 37, 20, 21], 1 returns [20, 37, 21]', () => {
  expect(deleteNth([20, 37, 20, 21], 1)).toStrictEqual([20, 37, 21]);
});

test('that input [1, 1, 3, 3, 7, 2, 2, 2, 2], 3 returns [1, 1, 3, 3, 7, 2, 2, 2]', () => {
  expect(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)).toStrictEqual([1, 1, 3, 3, 7, 2, 2, 2]);
});