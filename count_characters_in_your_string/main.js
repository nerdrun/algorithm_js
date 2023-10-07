function count(string) {
  return string.split('').reduce((acc, cur) => (acc[cur] ? acc[cur]++ : acc[cur] = 1, acc), {});
}

module.exports = count;