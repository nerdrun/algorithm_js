function wave(str){
  return [...str].map((val, idx) => `${str.slice(0, idx)}${val.toUpperCase()}${str.slice(idx + 1)}`).filter(x => x !== str);
  return [...str].reduce((acc, cur, idx) => (cur.trim() ? acc.push(`${str.slice(0, idx)}${cur.toUpperCase()}${str.slice(idx + 1)}`) : acc, acc), []);

  const result = [];
  for(let i = 0; i < str.length; i++) {
    if(str[i].trim()) { 
      result.push(`${str.slice(0, i)}${str[i].toUpperCase()}${str.slice(i + 1, str.length)}`);
    }
  }
  return result;
}

module.exports = wave;