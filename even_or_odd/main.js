function evenOrOdd(number) {
  // return number % 2 === 0 ? 'Even' : 'Odd';  <=== the previous answer
  return number % 2 ? 'Odd' : 'Even';  // <=== clever way
}

module.exports = evenOrOdd;