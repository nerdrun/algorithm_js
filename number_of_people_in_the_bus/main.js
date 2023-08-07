const number = function(busStops){
  /// ES6
  return busStops.reduce((cur, [getOn, getOff]) => cur + (getOn - getOff), 0);

  /// for loop
  let result = 0;
  for(let i = 0; i < busStops.length; i++) {
    const [peopleGotOn, peopleGotOff] = busStops[i];
    result += peopleGotOn - peopleGotOff;
  }
  return result;
}

module.exports = number;