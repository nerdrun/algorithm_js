function past(h, m, s){
  /// this following code looks more readable and understandable than the next solution. 
  // const hoursInMilliseconds = h * 3600 * 1000;
  // const minutesInMilliseconds = m * 60 * 1000;
  // const secondsInMilliseconds = s * 1000;
  // return hoursInMilliseconds + minutesInMilliseconds + secondsInMilliseconds;

  /// This is a short code but not too readable.
  return ((h * 3600) + (m * 60) + s) * 1000;
}

module.exports = past;