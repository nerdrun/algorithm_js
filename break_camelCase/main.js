function solution(value) {
  return value.split('').reduce((acc, cur) => (cur == cur.toUpperCase() ? acc += ' ' : acc, acc += cur, acc), '');

  const lastCapitalCharCode = 90;
  return value.split('').reduce((result, character) => {
    const charCode = character.charCodeAt(0);
    if(charCode <= lastCapitalCharCode) result += ' ';
    result += character;
    return result;
  }, '');

  return value.split('').reduce((result, character) => {
    if(character <= character.toUpperCase()) result += ' ';
    result += character;
    return result;
  }, '');
}

module.exports = solution;