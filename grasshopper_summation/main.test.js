const summation = require('./main');


describe('the summation of every number from 1 to num', () => {
  test('2 sums (1) so it returns 1', () => {
    expect(summation(1)).toBe(1);
  });

  test('2 sums (1,2) so it returns 3', () => {
    expect(summation(2)).toBe(3);
  });

  test('3 sums (1,2,3) so it returns 6', () => {
    expect(summation(3)).toBe(6);
  });

  test('8 sums (1,2,3,4,5,6,7,8) so it returns 36', () => {
    expect(summation(8)).toBe(36);
  });
});