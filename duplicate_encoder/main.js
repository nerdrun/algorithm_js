function duplicateEncode(word){
  const array = [...word].map(w => w.toLowerCase());

  const duplications = [];

  for(let i = 0; i < array.length; i++) {
    let syllable = array[i];
    for(let j = i + 1; j < array.length - 1; j++) {
      if(syllable === array[j]) duplications.push(j);
    }
  }
  // for(let j = 0; j < array.length; j++) {
  //   if(syllable === array[j]) array[j] = count > 1 ? ')' : '(';
  // }
  return duplications;
}

module.exports = duplicateEncode;
