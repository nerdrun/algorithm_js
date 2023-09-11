function twoSum(numbers, target) {
  /// This for loop has a time complexity of O(n).
  const seen = new Map();
  for(let i = 0; i < numbers.length; i++) {
    let value = numbers[i], sub = target - numbers[i];
    if(seen.has(sub)) return [seen.get(sub), i];
    seen.set(value, i);
  }

  /// This for loop has a time complexity of O(n^2).
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