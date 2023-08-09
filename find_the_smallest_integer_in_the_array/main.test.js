const SmallestIntegerFinder = require('./main');

describe('The smallest number in an array', () => {
  test('the smallest number in [0] is 0', () => {
    const smallest = new SmallestIntegerFinder();
    expect(smallest.findSmallestInt([0])).toBe(0);
  });
  test('the smallest number in [1] is 1', () => {
    const smallest = new SmallestIntegerFinder();
    expect(smallest.findSmallestInt([1])).toBe(1);
  });
  test('the smallest number in [1,0] is 0', () => {
    const smallest = new SmallestIntegerFinder();
    expect(smallest.findSmallestInt([1,0])).toBe(0);
  });
  test('the smallest number in [1,2,3] is 1', () => {
    const smallest = new SmallestIntegerFinder();
    expect(smallest.findSmallestInt([1,2,3])).toBe(1);
  });
});