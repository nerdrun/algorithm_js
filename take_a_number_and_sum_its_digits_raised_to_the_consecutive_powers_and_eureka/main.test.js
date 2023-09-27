const sumDigPow = require('./main');

/// take apart a number to 10th and 1st.

describe('take apart a number to 10th and ones and sum', () => {
  test('1,2 returns [1,2]', () => {
    expect(sumDigPow(1,2)).toStrictEqual([1,2]);
  });
});

// describe('take apart a number to 10th and ones', () => {
//   test('[89, 90] must return [89]', () => {
//     expect(sumDigPow([10,11])).
//   });
// });