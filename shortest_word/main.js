function findShort(s){
  /// ES6
  return s.split(' ').sort((a, b) => a.length - b.length).shift().length;

  /// Another way
  return Math.min(...s.split(" ").map (s => s.length));

  /// for loop
  let str = s;
  const array = s.split(' ');

  if(array.length === 1) return s.length;
  for(let i = 0; i < array.length; i++) {
    for(let j = i + 1; j < array.length; j++) {
      if(array[i].length > array[j].length) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      };
    }
  }
  return array[0].length;
}

module.exports = findShort;