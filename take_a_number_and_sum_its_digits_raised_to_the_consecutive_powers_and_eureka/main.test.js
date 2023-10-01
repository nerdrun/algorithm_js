const sumDigPow = require('./main');

describe('take a number and sum its digits raised to the consecutive power', () => {
  test('1,2 returns [1,2]', () => {
    expect(sumDigPow(1,2)).toStrictEqual([1,2]);
  });
  test('8,10 returns [8,9]', () => {
    expect(sumDigPow(8,10)).toStrictEqual([8,9]);
  });
  test('1,100 returns [1,2,3,4,5,6,7,8,9,89]', () => {
    expect(sumDigPow(1,100)).toStrictEqual([1,2,3,4,5,6,7,8,9,89]);
  });
});
