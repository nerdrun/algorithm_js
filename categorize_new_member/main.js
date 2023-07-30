function openOrSenior(data){
  /// ES6 build-in fn
  // return data.map(([age, handicap]) => age >= 55 && handicap > 7 ? 'Senior' : 'Open');

  /// For loop
  const result = [];
  function isSenior([age, handicap]) {
    // const age = member[0];
    // const handicap = member[1];
    return age >= 55 && handicap > 7;
  }
  for(let i = 0; i < data.length; i++) {
    result.push(isSenior(data[i]) ? 'Senior' : 'Open');
  }

  return result;
}

module.exports = openOrSenior;