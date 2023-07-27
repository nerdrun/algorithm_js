function countPositivesSumNegatives(input) {
  if(!(input && input.length)) return [];
  // if(!input?.length) return [];

  /// The code below has a bad performance and complexity O(n * 3), and unreadable.
  return [
    input.filter(val => val > 0).length,
    input.filter(val => val < 0).reduce((acc, cur) => acc + cur, 0)
  ];
  // const positiveCount = input.filter(val => val > 0).length;
  // const negativeSum = input.filter(val => val < 0).reduce((acc, cur) => acc + cur, 0);
  // return [positiveCount, negativeSum];


  // ================================================================================================================    
  // I should not use build-in code, but for-loop if I really want to take into account how to use TDD and complexity.
  // ================================================================================================================    
  // if (input == null || input.length == 0) return [];

  // var positive = 0;
  // var negative = 0;

  // for (var i=0, l=input.length; i<l; ++i) {
  //   if (input[i] > 0) ++ positive;
  //   else negative += input[i];
  // }

  // return [positive, negative];
}

module.exports = countPositivesSumNegatives;