function duplicateEncode(word){
  /// ES6
  return word
  .toLowerCase()
  .split('')
  .map( function (a, i, w) {
    return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
  })
  .join('');

  /// for loop
  const array = [...word.toLowerCase()];
  const duplications = [];

  for(let i = 0; i < array.length; i++) {
    let count = 0;
    let syllable = array[i];

    for(let j = 0; j < array.length; j++) {
      if(syllable === array[j]) count++;
    }
    if(syllable === array[i] && count > 1) duplications.push(i);
  }

  for(let i = 0; i < array.length; i++) {
    if(duplications.indexOf(i) >= 0) array[i] = ')';
    else array[i] = '(';
  }

  return array.join('');
}

module.exports = duplicateEncode;
