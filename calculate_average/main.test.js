const findAverage = require('./main');

test('empty array returns 0', () => {
  expect(findAverage([])).toBe(0);
});

test('[1] return 1', () => {
  expect(findAverage([1])).toBe(1);
});

// test('the total amount of array [1,2] is 3', () => {
//   expect(findAverage([1,2])).toBe(3);
// });

// test('the total amount of array [1,2,3,4,5] is 15', () => {
//   expect(findAverage([1,2,3,4,5])).toBe(15);
// });

test('the average of array [1,2,3,4,5] is 3', () => {
  expect(findAverage([1,2,3,4,5])).toBe(3);
});

test('the average of array [1,2,3,4] is 2.5', () => {
  expect(findAverage([1,2,3,4])).toBe(2.5);
});