function sumTwoSmallestNumbers(numbers) {
  return numbers.sort((a, b) => a - b).slice(0, 2).reduce((acc, cur) => acc + cur, 0);

  /// for loop
  for(let i = 0; i < numbers.length - 1; i++) {
    for(let j = i; j < numbers.length; j++) {
      if(numbers[i] > numbers[j + 1]) {
        let temp = numbers[i];
        numbers[i] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }

  return numbers[0] + numbers[1];
}

module.exports = sumTwoSmallestNumbers;