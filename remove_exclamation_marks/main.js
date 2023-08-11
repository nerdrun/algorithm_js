function removeExclamationMarks(s) {
  /// RegExp
  return s.replace(/!/gi, '');

  /// ES6
  // return s.replaceAll('!', '');

  /// for loop
  let result = '';
  for(let i = 0; i < s.length; i++) {
    if(s[i] !== '!') result += s[i];
  }
  return result;
}

module.exports = removeExclamationMarks;