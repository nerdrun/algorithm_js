class SmallestIntegerFinder {
  findSmallestInt(args) {
    /// Math
    // return Math.min(...args);

    /// ES6 Array
    // return args.reduce((acc, cur) => {
    //   if(acc > cur) return cur;
    //   return acc;
    // }, args[0]);

    /// for loop
    let result = args[0];
    for(let i = 0; i < args.length; i++) {
      if(result > args[i]) result = args[i];
    }
    return result;
  }
}

module.exports = SmallestIntegerFinder;