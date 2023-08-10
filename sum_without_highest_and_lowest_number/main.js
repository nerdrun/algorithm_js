function sumArray(array) {
  /// very clever way
  return array ? array.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0

  /// ES6
  if(!array || !array.length || array.length === 1) return 0;

  array.splice(array.indexOf(Math.max(...array)), 1);
  array.splice(array.indexOf(Math.min(...array)), 1);
  return array.reduce((acc, cur) => acc + cur, 0);

  return array.filter(val => val != Math.max(...array)).filter(val => val != Math.min(...array)).reduce((acc, cur) => acc + cur, 0);
  
  /// for loop
  /// But this for loop solution isn't too impressive.
  /// I should've sorted the array first and sum up the values in array without values of the first and last index.
  const indexOftheHighest = getIndexOfTheHighest(array);
  const indexOftheLowest = getIndexOfTheLowest(array);

  function getIndexOfTheHighest(array) {
    let index = 0;
    let result = array[0];
    for(let i = 0; i < array.length - 1; i++) {
      if(result < array[i + 1]) {
        result = array[i + 1];
        index = i + 1;
      }
    }
    return index;
  }

  function getIndexOfTheLowest(array) {
    let index = 0;
    let result = array[0];
    for(let i = 0; i < array.length - 1; i++) {
      if(result > array[i + 1]) {
        result = array[i + 1];
        index = i + 1;
      }
    }
    return index;
  }

  let sum = 0;
  for(let i = 0; i < array.length; i++) {
    if(i === indexOftheHighest || i === indexOftheLowest) continue;
    sum += array[i];
  }
  return sum;
}

function getIndexOfTheHighest(array) {
  let index = 0;
  let result = array[0];
  for(let i = 0; i < array.length - 1; i++) {
    if(result < array[i + 1]) {
      result = array[i + 1];
      index = i + 1;
    }
  }
  return index;
}

function getIndexOfTheLowest(array) {
  let index = 0;
  let result = array[0];
  for(let i = 0; i < array.length - 1; i++) {
    if(result > array[i + 1]) {
      result = array[i + 1];
      index = i + 1;
    }
  }
  return index;
}

module.exports = {
  sumArray,
  getIndexOfTheHighest,
  getIndexOfTheLowest, 
};