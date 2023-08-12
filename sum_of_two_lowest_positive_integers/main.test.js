const sumTwoSmallestNumbers = require('./main');

/// Sort the array from the lowest to the highest values
/// Ignore decimal value
/// Ignore negative value

describe('The two lowest two values sum', () => {
  test('[0,1,2,3] returns 1', () => {
    expect(sumTwoSmallestNumbers([0,1,2,3])).toBe(1);
  });
  test('[0,2,3,4] returns 2', () => {
    expect(sumTwoSmallestNumbers([0,2,3,4])).toBe(2);
  });
  test('[0,3,2,4] returns 2', () => {
    expect(sumTwoSmallestNumbers([0,3,2,4])).toBe(2);
  });
  test('[15, 28, 4, 2, 43] returns 6', () => {
    expect(sumTwoSmallestNumbers([15, 28, 4, 2, 43])).toBe(6);
  });
  test('[23, 71, 33, 82, 1] returns 24', () => {
    expect(sumTwoSmallestNumbers([23, 71, 33, 82, 1])).toBe(24);
  });
});