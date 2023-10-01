function sumDigPow(a, b) {
  return Array.from({ length: ++b - a }, (_, i) => a + i).filter((v) => v === v.toString().split('').map(Number).reduce((acc, cur, idx) => (acc += Math.pow(+cur, idx + 1), acc), 0));
}

module.exports = sumDigPow;