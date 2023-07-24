function digitize(n) {
  /// All of solutions work, however you must take into account handling large numbers. the complexity will dramatically increase along the size of number.
  return `${n}`.split('').map((e) => parseInt(e)).reverse();  /// my solution.

  // return String(n).split('').map((e) => parseInt(e)).reverse();
  // return `${n}`.split('').map(Number).reverse(); /// clever way
  // return Array.from(String(n), Number).reverse(); /// clever way
}

module.exports = digitize;