const betterThanAverage = require('./main');

// test('total points in a class is 30', () => {
//   expect(betterThanAverage([10, 8], 12)).toBe(30);
// });

// test('total points in a class is 200', () => {
//   expect(betterThanAverage([80, 20], 100)).toBe(200);
// });

// test('the average score in a class is 80', () => {
//   expect(betterThanAverage([80, 70, 50], 90)).toBe(72.5);
// });

test('There are two people in a class and my score is higher than average.', () => {
  expect(betterThanAverage([10], 12)).toBe(true);
});

test('There are two people in a class and my score is lower than average.', () => {
  expect(betterThanAverage([10], 8)).toBe(false);
});

test('There are three people in a class and my score is higher than average.', () => {
  expect(betterThanAverage([2, 3], 5)).toBe(true);
});