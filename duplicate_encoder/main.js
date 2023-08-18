function duplicateEncode(word){
  let result = ''
  let firstSyllable = word[0];

  // for(let i = 0; i < length; i++) {
  //   let index = i === 0 ? 1 : i;
  //   if(firstSyllable === word[index]) result += ')';
  //   else result += '(';
  // }

  const array = [...word];

  if(word[0]) { 
    if(firstSyllable === word[1]) result += ')';
    else result += '(';
  }
  if(word[1]) {
    if(firstSyllable === word[1]) result += ')';
    else result += '(';
  }
  if(word[2]) {
    if(firstSyllable === word[2]) result += ')';
    else result += '(';
  }
  if(word[3]) {
    if(firstSyllable === word[3]) result += ')';
    else result += '(';
  }

  return result;
}

module.exports = duplicateEncode;
