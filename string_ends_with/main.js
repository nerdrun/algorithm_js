function solution(str, ending){
  /// the shortest way
  return str.endsWith(ending);
  /// shorter way
  return ending.length ? str.slice(-ending.length) === ending : true;

  /// for loop
  let endsWith = '';
  for(let i = str.length - 1; i >= str.length - ending.length; i--) {
    endsWith = str[i] + endsWith;
  }
  if(str[0] === ending[0] && str.length !== ending.length) return false;
  return endsWith === ending;
}

module.exports = solution;