const digitize = require('./main');

// test('call digitize', () => {
//   expect(digitize(35231)).toStrictEqual([1,3,2,5,3]);
// });

// test('call digitize', () => {
//   expect(digitize(0)).toStrictEqual([0]);
// });

// test('call digitize', () => {
//   expect(digitize(1)).toStrictEqual([1]);
// });

// test('call digitize', () => {
//   expect(digitize(12)).toStrictEqual([1,2]);
// });

// test('call digitize', () => {
//   expect(digitize(123)).toStrictEqual([1,2,3]);
// });

test('numbers must be reverse as an array', () => {
  expect(digitize(123)).toStrictEqual([3,2,1]);
});

test('numbers must be reverse as an array', () => {
  expect(digitize(35231)).toStrictEqual([1,3,2,5,3]);
});

test('numbers must be reverse as an array', () => {
  expect(digitize(0)).toStrictEqual([0]);
});