function high(x){
  return x.split(' ').map(val => ({ word: val, value: val.split('').reduce((acc, cur) => acc + (cur.charCodeAt(0) - 96), 0) })).sort((a, b) => b.value - a.value).shift().word;
}

module.exports = high;