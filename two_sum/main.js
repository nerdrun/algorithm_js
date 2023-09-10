function twoSum(numbers, target) {
  let result;
  for(let i = 0; i < numbers.length - 1; i++) {
    let sub = target - numbers[i];
    for(let j = i + 1; j < numbers.length; j++) {
      if(sub === numbers[j]) {
        result = [numbers[i], numbers[j]];
      }
    }
  }
  return result;
}

module.exports = twoSum;