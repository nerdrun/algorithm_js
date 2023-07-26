const positiveSum = require('./main');

test('[0] returns 0', () => {
  expect(positiveSum([0])).toBe(0);
});

test('[1] returns 1', () => {
  expect(positiveSum([1])).toBe(1);
});

test('[-1] returns 0', () => {
  expect(positiveSum([-1])).toBe(0);
});

test('[1,2] returns 3', () => {
  expect(positiveSum([1,2])).toBe(3);
});

test('[1,2,-1] returns 3', () => {
  expect(positiveSum([1,2,-1])).toBe(3);
});

test('[-1,2,3,4,-5] returns 9', () => {
  expect(positiveSum([-1,2,3,4,-5])).toBe(9);
});