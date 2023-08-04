function solution(str){
  // ES6
  return [...str].reverse().join('');

  // for loop
  let result = '';
  for(let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

module.exports = solution;