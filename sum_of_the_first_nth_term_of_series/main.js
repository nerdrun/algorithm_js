function SeriesSum(n) {
  /// ES6
  return [...Array(n).keys()].map((_, idx) => 1 + idx * 3).reduce((acc, val) => (acc += 1 / val, acc), 0).toFixed(2);

  /// for loop
  let result = 0;
  for(let i = 0, j = 1; i < n; i++, j+=3) {
    result += (1 / j);
  }
  return result.toFixed(2);
}

module.exports = SeriesSum;