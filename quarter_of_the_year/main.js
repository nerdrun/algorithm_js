const quarterOf = (month) => {
  /// This is a quite smart solution that I've never thought. hmm...
  return Math.ceil(month / 3);

  /// This solution below I made isn't too readable.
  // let quarter = 1;
  // if(4 <= month) quarter = 2;
  // if(7 <= month) quarter = 3;
  // if(10 <= month) quarter = 4;

  // return quarter;

  /// This one is more readable.
  // let quarter = 1;
  // if (month <= 3) quarter = 1;
  // else if (month <= 6) quarter = 2; 
  // else if (month <= 9) quarter = 3; 
  // else if (month <= 12) quarter = 4;
  // return quarter;
}

module.exports = quarterOf;