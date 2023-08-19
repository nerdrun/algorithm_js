function duplicateEncode(word){
  const array = [...word];


  for(let i = 0; i < array.length; i++) {
    let count = 0;
    let syllable = array[i];

    if(array[i] !== '(' && array[i] !== ')') {
      if(syllable === array[i]) count++;
      if(count > 1) {
        for(let j = i; j < array.length; j++) {
          if(syllable === array[j]) array[j] = ')';
        }
      }
      if(count <= 1) {
        for(let j = 0; j < array.length; j++) {
          if(syllable === array[j]) array[j] = '(';
        }
      }
    }
  }

  return array.join('');

  let count = 0;
  let syllable = array[0];

  if(array[0] !== '(' && array[0] !== ')') {
    if(syllable === array[0]) count++;
    if(count > 1) {
      for(let i = 0; i < array.length; i++) {
        if(syllable === array[i]) array[i] = ')';
      }
    }
    if(syllable === array[1]) count++;
    if(count > 1) {
      for(let i = 0; i < array.length; i++) {
        if(syllable === array[i]) array[i] = ')';
      }
    }
    if(syllable === array[2]) count++;
    if(count > 1) {
      for(let i = 0; i < array.length; i++) {
        if(syllable === array[i]) array[i] = ')';
      }
    }
    if(syllable === array[3]) count++;
    if(count > 1) {
      for(let i = 0; i < array.length; i++) {
        if(syllable === array[i]) array[i] = ')';
      }
    }

    if(count <= 1) {
      for(let i = 0; i < array.length; i++) {
        if(syllable === array[i]) array[i] = '(';
      }
    }
  }

  count = 0;
  syllable = array[1];
  if(array[1] !== '(' && array[1] !== ')') {
    if(syllable === array[1]) count++;
    if(count > 1) {
      for(let i = 1; i < array.length; i++) {
        if(syllable === array[i]) array[i] = ')';
      }
    }
    if(syllable === array[2]) count++;
    if(count > 1) {
      for(let i = 1; i < array.length; i++) {
        if(syllable === array[i]) array[i] = ')';
      }
    }
    if(syllable === array[3]) count++;
    if(count > 1) {
      for(let i = 1; i < array.length; i++) {
        if(syllable === array[i]) array[i] = ')';
      }
    }
    if(syllable === array[4]) count++;
    if(count > 1) {
      for(let i = 1; i < array.length; i++) {
        if(syllable === array[i]) array[i] = ')';
      }
    }

    if(count <= 1) {
      for(let i = 1; i < array.length; i++) {
        if(syllable === array[i]) array[i] = '(';
      }
    }
  }

  count = 0;
  syllable = array[2];
  if(array[2] !== '(' && array[2] !== ')') {
    if(syllable === array[2]) count++;
    if(count > 1) {
      for(let i = 2; i < array.length; i++) {
        if(syllable === array[i]) array[i] = ')';
      }
    }
    if(syllable === array[3]) count++;
    if(count > 1) {
      for(let i = 2; i < array.length; i++) {
        if(syllable === array[i]) array[i] = ')';
      }
    }
    if(syllable === array[4]) count++;
    if(count > 1) {
      for(let i = 2; i < array.length; i++) {
        if(syllable === array[i]) array[i] = ')';
      }
    }
    if(syllable === array[5]) count++;
    if(count > 2) {
      for(let i = 2; i < array.length; i++) {
        if(syllable === array[i]) array[i] = ')';
      }
    }

    if(count <= 1) {
      for(let i = 2; i < array.length; i++) {
        if(syllable === array[i]) array[i] = '(';
      }
    }
  }

  return array.join('');
}

module.exports = duplicateEncode;
