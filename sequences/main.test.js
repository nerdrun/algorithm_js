const findCombos = require('./main');

describe('the number of sort count test', () => {
  test('[] returns 1', () => {
    expect(findCombos([])).toStrictEqual(1);
  });
  test('[0] returns 1', () => {
    expect(findCombos([0])).toStrictEqual(1);
  });
  test('[1,2] returns 2', () => {
    expect(findCombos([1,2])).toStrictEqual(2);
  });
  test('[1,2,3] returns 6', () => {
    expect(findCombos([1,2,3])).toStrictEqual(6);
  });
  test('[1,2,2] returns 3', () => {
    expect(findCombos([1,2,2])).toStrictEqual(3);
  });
  test('[[1,2]]] returns 2', () => {
    expect(findCombos([[1,2]])).toStrictEqual(2);
  });
  test('[1,2,3,4] returns 24', () => {
    expect(findCombos([1,2,3,4])).toStrictEqual(24);
  });
  // test('[312,[333],[3,3,3,[],[[3], 44, [2, []]], 2, []]] returns 7560', () => {
  //   expect(findCombos([312,[333],[3,3,3,[],[[3], 44, [2, []]], 2, []]])).toStrictEqual(7560);
  // });
});
