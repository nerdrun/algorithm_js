const twoSum = require('./main');

test('the array of [1,2] and the parameter 3 returns [1,2]', () => {
  expect(twoSum([1,2], 3)).toStrictEqual([1,2]);
});

test('the array of [2,2,1] and the parameter 4 returns [2,2]', () => {
  expect(twoSum([2,2,1], 4)).toStrictEqual([2,2]);
});

test('the array of [1,5,3] and the parameter 4 returns [1,3]', () => {
  expect(twoSum([1,5,3], 4)).toStrictEqual([1,3]);
});

test('the array of [5,3,1] and the parameter 4 returns [3,1]', () => {
  expect(twoSum([5,3,1], 4)).toStrictEqual([3,1]);
});

test('the array of [1234,5678,9012] and the parameter 14690 returns [5678, 9012]', () => {
  expect(twoSum([1234,5678,9012], 14690)).toStrictEqual([5678,9012]);
});

test('the array of [1,2,3] and the parameter 4 returns [1,3]', () => {
  expect(twoSum([1,2,3], 4)).toStrictEqual([1,3]);
});