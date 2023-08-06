const addBinary = require('./main');

/// calculate reminder (o)
/// calcuate quotient (o)
/// change first parameter into binary and return it (o)
/// sum two parameters and change it into binary and return it (o)

test('0, 0 returns string 0', () => {
  expect(addBinary(0, 0)).toBe('0');
});

test('1, 0 returns string 1', () => {
  expect(addBinary(1, 0)).toBe('1');
});

test('2, 0 returns string 10', () => {
  expect(addBinary(2, 0)).toBe('10');
});

test('3, 0 returns string 11', () => {
  expect(addBinary(3, 0)).toBe('11');
});

test('5, 0 returns string 101', () => {
  expect(addBinary(5, 0)).toBe('101');
});

test('5, 1 returns string 110', () => {
  expect(addBinary(5, 1)).toBe('110');
});

test('5, 9 returns string 1110', () => {
  expect(addBinary(5, 9)).toBe('1110');
});

// describe('reminder calculation', () => {
//   test('the reminder of 2 is 0', () => {
//     expect(addBinary(2, 0)).toBe(0);
//   });
//   test('the reminder of 3 is 1', () => {
//     expect(addBinary(3, 0)).toBe(1);
//   });
//   test('the reminder of 1 is 1', () => {
//     expect(addBinary(1, 0)).toBe(1);
//   });
//   test('the reminder of 0 is 1', () => {
//     expect(addBinary(0, 0)).toBe(0);
//   });
// });

// describe('quotient calculation', () => {
//   test('the quotient of 2 is 0', () => {
//     expect(addBinary(2, 0)).toBe(1);
//   });
//   test('the quotient of 3 is 1', () => {
//     expect(addBinary(3, 0)).toBe(1);
//   });
//   test('the quotient of 1 is 1', () => {
//     expect(addBinary(1, 0)).toBe(0);
//   });
//   test('the quotient of 0 is 1', () => {
//     expect(addBinary(0, 0)).toBe(0);
//   });
// });