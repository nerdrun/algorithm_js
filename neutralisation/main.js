function neutralise(s1, s2) {
  return [...s1].reduce((acc, value, index) => (acc += value === s2[index] ? value : '0', acc) , '');
}
module.exports = neutralise;