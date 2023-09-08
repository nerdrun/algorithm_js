function colorProbability(color, texture){
  const marbles = { bumpyred: 4, bumpyyellow: 2, bumpygreen: 1, smoothred: 1, smoothyellow: 1, smoothgreen: 1 };
  return (Math.trunc(marbles[texture + color] / (texture === 'bumpy' ? 7 : 3) * 100) / 100).toString();
}

module.exports = colorProbability;