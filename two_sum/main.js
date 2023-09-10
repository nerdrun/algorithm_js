function twoSum(numbers, target) {
  for(let i = 0; i < numbers.length - 1; i++) {
    let sub = target - numbers[i];
    for(let j = i + 1; j < numbers.length; j++) {
      if(sub === numbers[j]) {
        return [i, j];
      }
    }
  }
}

module.exports = twoSum;