function getMiddle(s) {
  let half = Math.floor(s.length / 2);
  return s.slice(s.length % 2 === 0 ? half - 1 : half, half + 1);
}

module.exports = getMiddle;