function smash (words) {
  /// ES6
  /// Both works the same, so use line 5 code.
  return words.join(' ').slice(0);
  return words.join(' ');

  /// for loop
  let result = '';
  for(let i = 0; i < words.length; i++) {
    result += words[i];
    if(i !== words.length - 1) result += ' ';
  }
  return result;
};

module.exports = smash;