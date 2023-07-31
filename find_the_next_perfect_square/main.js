function findNextSquare(sq) {
  /// return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2); <== a clever way.

  /// with build-in methods
  // let result = Math.sqrt(sq);
  // return Number.isInteger(result) ? (result + 1) * (result + 1) : -1;

  /// with while loop
  let count = 0;
  while(sq > 0) {
    const substract = count + 1;
    sq -= count + substract;
    count++;
  }
  return sq < 0 ? -1 : (count + 1) * (count + 1);
}

module.exports = findNextSquare;