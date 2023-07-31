const findNextSquare = require('./main');

// test('the root of a 1 square meter of perfect square must be 1', () => {
//   expect(findNextSquare(1)).toBe(1);
// });

// test('the root of a 4 square meter of perfect square must be 2', () => {
//   expect(findNextSquare(4)).toBe(2);
// });

// test('the method substract a given number with a odd number, It returns 8 ', () => {
//   expect(findNextSquare(9)).toBe(8);
// // });

// test('the method substract a given number with odd numbers until the given number gets equal or lower than 0 ', () => {
//   expect(findNextSquare(9)).toBe(0);
// });

// test('the method repeatedly substracts a given number with odd numbers until the given number gets equal or lower than 0 and returns how many times it repeated. The count must be 3 in this case', () => {
//   expect(findNextSquare(9)).toBe(3);
// });

// test('the method repeatedly substracts a given number with odd numbers until the given number gets equal or lower than 0 and returns how many times it repeated. The count must be 14 in this case', () => {
//   expect(findNextSquare(196)).toBe(14);
// });

// test('the method repeatedly substracts a given number with odd numbers until the given number gets equal or lower than 0 and returns how many times it repeated. The count must be 40 in this case', () => {
//   expect(findNextSquare(1600)).toBe(40);
// });

test('if a given number is not exactly 0 but smaller than 0, It must return -1.', () => {
  expect(findNextSquare(5)).toBe(-1);
});

test('Now, It should return the square meter of the next the square root number.', () => {
  expect(findNextSquare(9)).toBe(16);
});