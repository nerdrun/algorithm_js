const arrayDiff = require('./main');

test('a is [1] b is [1] returns []', () => {
  expect(arrayDiff([1], [1])).toStrictEqual([]);
});

test('a is [1,2] b is [1] returns [2]', () => {
  expect(arrayDiff([1,2], [1])).toStrictEqual([2]);
});

test('a is [2,3,4] b is [3] returns [2,4]', () => {
  expect(arrayDiff([2,3,4], [3])).toStrictEqual([2,4]);
});

test('a is [] b is [1,2] returns []', () => {
  expect(arrayDiff([], [1,2])).toStrictEqual([]);
});

test('a is [1,2,2] b is [2] returns [1]', () => {
  expect(arrayDiff([1,2,2], [2])).toStrictEqual([1]);
});

test('a is [1,2,2] b is [1] returns [2,2]', () => {
  expect(arrayDiff([1,2,2], [1])).toStrictEqual([2,2]);
});

