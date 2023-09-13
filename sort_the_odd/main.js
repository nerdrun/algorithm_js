function sortArray(array) {
  /// ES6
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);

  /// for loop
  for(let i = 0; i < array.length - 1; i++) {
    for(let j = i + 1; j < array.length; j++) {
      if((array[i] % 2 !== 0 && array[j] % 2 !== 0) && (array[i] > array[j])) {
        let temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
}

module.exports = sortArray;