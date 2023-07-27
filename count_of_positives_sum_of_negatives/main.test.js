const countPositivesSumNegatives = require('./main');

test('[1,2,3] has 3 positive numbers and the total of negative values must be 0', () => {
  expect(countPositivesSumNegatives([1,2,3])).toStrictEqual([3, 0]);
});

test('[1,2,3,-4] has 3 positive numbers and the total of negative values must be -4', () => {
  expect(countPositivesSumNegatives([1,2,3,-4])).toStrictEqual([3, -4]);
});

test('[1,2,3,-4,-10,5] has 4 positive numbers and the total of negative values must be -14', () => {
  expect(countPositivesSumNegatives([1,2,3,-4,-10,5])).toStrictEqual([4, -14]);
});

test('[0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14] has 8 positive numbers and the total of negative values must be -50', () => {
  expect(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])).toStrictEqual([8, -50]);
});

test('undefined must returns empty array', () => {
  expect(countPositivesSumNegatives()).toStrictEqual([]);
});

test('null must returns empty array', () => {
  expect(countPositivesSumNegatives(null)).toStrictEqual([]);
});

test('empty array must returns empty array', () => {
  expect(countPositivesSumNegatives([])).toStrictEqual([]);
});

test('[0, 0] returns [0, 0] form', () => {
  expect(countPositivesSumNegatives([0, 0])).toStrictEqual([0, 0]);
});