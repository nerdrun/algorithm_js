function findAverage(array) {
  if(!array.length) return 0;

  // return array.reduce((arr, cur) => arr + cur, 0) / array.length;

  let total = 0;
  for(let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total / array.length;
}

module.exports = findAverage;