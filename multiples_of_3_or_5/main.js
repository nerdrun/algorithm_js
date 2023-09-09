const sumOfMultiples = (limit, divisor) => {
  const occurrences = Math.trunc((limit - 1) / divisor);
  return ((occurrences + 1) * divisor) / 2 * occurrences;
};

function solution(number){
  /// using Triangular Number formula
  /// description link : (https://www.mathsisfun.com/algebra/triangular-numbers.html)
  if(number < 0) return 0;
  const limit = Number(number);
  return sumOfMultiples(limit, 3) + sumOfMultiples(limit, 5) - sumOfMultiples(limit, 3 * 5);

  /// better version of my answer
  let sum = 0;
  for(let i = 1; i < number; i++) {
    if(i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;

  /// my answer with for loop
  let result = 0;
  if(number < 0) return result;

  for(let i = 1; i < number; i++) {
    if(i % 3 === 0 && i % 5 === 0) result += i;
    else if(i % 3 === 0) result += i;
    else if(i % 5 === 0) result += i;
  }
  return result;
}

module.exports = solution;