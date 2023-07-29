function getCount(str) {
  /// RegExp
  // return (str.match(/[aeiou]/ig)||[]).length;


  /// Recursive function
  let count = 0;
  function recursiveCount(str) {
    if(!str) return count;

    if(str[0] === 'a') count++;
    else if(str[0] === 'e') count++;
    else if(str[0] === 'i') count++;
    else if(str[0] === 'o') count++;
    else if(str[0] === 'u') count++;

    return recursiveCount(str.slice(1));
  }
  return recursiveCount(str);


  /// For loop
  // function isVowel(char) {
  //   if(char === 'a') return true;
  //   else if(char === 'e') return true;
  //   else if(char === 'i') return true;
  //   else if(char === 'o') return true;
  //   else if(char === 'u') return true;
  //   return false;
  // }

  // let count = 0;
  // for(let i = 0; i < str.length; i++) {
  //   if(isVowel(str[i])) count++;
  // }
  // return count;
}

module.exports = getCount;