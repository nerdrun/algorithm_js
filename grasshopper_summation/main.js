const summation = function (num) {
  /// Ha... need to remember middle school math, sigh ...
  return num * ++num / 2;

  /// with Array
  return [...Array(++num).keys()].reduce((acc, cur) => acc + cur, 0);

  /// for loop
  let result = 0;
  for(let i = 1; i <= num; i++) {
    result += i;
  }
  return result;
}

module.exports = summation;