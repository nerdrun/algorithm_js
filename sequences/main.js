function findCombos(array) {
  const flat = array.flat(Infinity).sort((a, b) => a - b)
  if(flat.length <= 1) return 1;

  const sort = [];
  for(let i = 0; i < flat.length; i++) {
    for(let j = 0; j < flat.length - 1; j++) {
      if(flat[j] === flat[j + 1]) continue;
      let temp = flat[j];
      flat[j] = flat[j + 1];
      flat[j + 1] = temp; 
      const join = flat.join('')
      if(sort.indexOf(join) == -1) sort.push(join);
    }
  }
  return sort.length;
}

module.exports = findCombos;