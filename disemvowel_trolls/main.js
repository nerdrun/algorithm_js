function disemvowel(str) {
  /// Only RegExp
  // return str.replace(/[aeiou]/gi, '');

  /// ES6 + RegExp
  // return [...str].filter(char => !/([aeiouAEIOU])/g.test(char.toLowerCase())).join('');

  /// for loop
  let result = '';
  const isVowel = (char) => char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u';

  for(let i = 0; i < str.length; i++) {
    const lower = str[i].toLowerCase();
    if(!isVowel(lower)) result += str[i];
  }

  return result;
}

module.exports = disemvowel;