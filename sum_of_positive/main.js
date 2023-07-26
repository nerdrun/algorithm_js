function positiveSum(arr) {
  return arr.reduce((acc, cur) => cur > 0 ? acc + cur : acc, 0);
  // return arr.reduce((acc, cur)=> acc + (cur > 0 ? cur : 0),0);  // clever way. This line didn't use ternary operator.
  // return arr.filter(x => x>=0).reduce((a, c) => a + c, 0); // Here is another solution. clean.
}

module.exports = positiveSum;