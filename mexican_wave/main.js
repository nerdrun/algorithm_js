function wave(str){
  const result = [];
  for(let i = 0; i < str.length; i++) {
    const split = str.split('');
    split[i] = split[i].toUpperCase();
    result.push(split.join(''));
  }
  return result;
}

module.exports = wave;