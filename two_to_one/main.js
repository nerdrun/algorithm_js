function longest(s1, s2) {
  /// E6 way
  return [...new Set(s1 + s2)].sort().join('');

  /// for loop
  function removeDuplication(value) {
    let result = [...value];
    for(let i = 0; i < result.length; i++) {
      for(let j = i + 1; j < result.length; j++) {
        if(result[i] === result[j]) {
          result.splice(j, 1);
          i--;
        }
      }
    }
    return result;
  }

  function sort(array) {
    for(let i = 0; i < array.length; i++) {
      for(let j = i; j < array.length; j++) {
        if(array[i] > array[j]) {
          const temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
    }
    return array.join('');
  }

  let result = removeDuplication([...s1 + s2]);
  return sort(result);
}

module.exports = longest;