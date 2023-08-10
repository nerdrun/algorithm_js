const { sumArray, getIndexOfTheHighest, getIndexOfTheLowest } = require('./main');

/// get the highest index
/// get the lowest index
/// get sum all the numbers without the highest and lowest index

describe('get the highest index', () => {
  test('the highest index of [0] is 0', () => {
    expect(getIndexOfTheHighest([0])).toBe(0);
  });
  test('the highest index of [1] is 0', () => {
    expect(getIndexOfTheHighest([1])).toBe(0);
  });
  test('the highest index of [0,1] is 1', () => {
    expect(getIndexOfTheHighest([0,1])).toBe(1);
  });
  test('the highest index of [1,0] is 0', () => {
    expect(getIndexOfTheHighest([1,0])).toBe(0);
  });
});

describe('get the lowest index', () => {
  test('the lowest index of [0] is 0', () => {
    expect(getIndexOfTheLowest([0])).toBe(0);
  });
  test('the lowest index of [1] is 0', () => {
    expect(getIndexOfTheLowest([1])).toBe(0);
  });
  test('the lowest index of [0,1] is 0', () => {
    expect(getIndexOfTheLowest([0,1])).toBe(0);
  });
  test('the lowest index of [1,0] is 1', () => {
    expect(getIndexOfTheLowest([1,0])).toBe(1);
  });
  test('the lowest index of [-6, -20, -1, -10, -12] is 1', () => {
    expect(getIndexOfTheLowest([-6, -20, -1, -10, -12])).toBe(1);
  });
});

describe('get sum all the numbers without the highest and lowest index', () => {
  test('if the method hasn\'t got passed any parameter it returns 0', () => {
    expect(sumArray()).toBe(0);
  });
  test('if the array is empty it returns 0', () => {
    expect(sumArray([])).toBe(0);
  });
  test('if the array has only one element it returns 0', () => {
    expect(sumArray([1])).toBe(0);
  });
  test('the sum of [0, 1] is 1', () => {
    expect(sumArray([0, 1])).toBe(0);
  });
  // test('the sum of [6, 2, 1, 8, 10] is 16', () => {
  //   expect(sumArray([6, 2, 1, 8, 10])).toBe(16);
  // });
  // test('the sum of [0, 1, 6, 10, 10] is 17', () => {
  //   expect(sumArray([0, 1, 6, 10, 10])).toBe(17);
  // });
  // test('the sum of [-6, -20, -1, -10, -12] is -28', () => {
  //   expect(sumArray([-6, -20, -1, -10, -12])).toBe(-28);
  // });
  // test('the sum of [-6, 20, -1, 10, -12] is 3', () => {
  //   expect(sumArray([-6, 20, -1, 10, -12])).toBe(3);
  // });
});