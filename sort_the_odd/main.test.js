const sortArray = require('./main');

describe('test empty array', () => {
  test('empty array returns empty array', () => {
    expect(sortArray([])).toStrictEqual([]);
  });
});

describe('test sort odd numbers', () => {
  test('[1, 7] returns [1, 7]', () => {
    expect(sortArray([1, 7])).toStrictEqual([1, 7]);
  });
  test('[7, 1] returns [1, 7]', () => {
    expect(sortArray([7, 1])).toStrictEqual([1, 7]);
  });
  test('[9, 5, 3] returns [3, 5, 9]', () => {
    expect(sortArray([9, 5, 3])).toStrictEqual([3, 5, 9]);
  });
});

describe('test odd and even array', () => {
  test('[4, 2] returns [4, 2]', () => {
    expect(sortArray([4, 2])).toStrictEqual([4, 2]);
  });
  test('[3, 4, 2, 1] returns [1, 4, 2, 3]', () => {
    expect(sortArray([3, 4, 2, 1])).toStrictEqual([1, 4, 2, 3]);
  });
  test('[5, 8, 6, 3, 4] returns [3, 8, 6, 5, 4]', () => {
    expect(sortArray([5, 8, 6, 3, 4])).toStrictEqual([3, 8, 6, 5, 4]);
  });
  test('[9, 8, 7, 6, 5, 4, 3, 2, 1, 0] returns [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]', () => {
    expect(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])).toStrictEqual([1, 8, 3, 6, 5, 4, 7, 2, 9, 0]);
  });
  test('[9, 8, 7, 6, 5, 4, 3, 2, 1, 0] returns [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]', () => {
    expect(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])).toStrictEqual([1, 8, 3, 6, 5, 4, 7, 2, 9, 0]);
  });
});