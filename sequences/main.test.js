const findCombos = require('./main');

describe('extract all possible orders', () => {
  test('[1,2,3] returns 6', () => {
    expect(findCombos([1,2,3])).toStrictEqual(6);
  });
  test('[1,2,3,4] returns 24', () => {
    expect(findCombos([1,2,3,4])).toStrictEqual(24);
  });
  test('[1,2,2] returns 3', () => {
    expect(findCombos([1,2,2])).toStrictEqual(3);
  });
});
