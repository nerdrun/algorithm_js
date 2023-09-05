function isValidWalk(walk) {
  if(walk.length !== 10) return false;
  const directionCounts = walk.reduce((acc, cur) => (acc[cur] = acc[cur] + 1 || 1, acc), {});
  return (directionCounts['w'] === directionCounts['e']) && (directionCounts['n'] === directionCounts['s']);
}

module.exports = isValidWalk;