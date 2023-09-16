function search(haystack, needle) {
  function recersive(object, path) {
    /// using Object.entries
    // const array = [];
    // for(const [key, value] of Object.entries(object)) {
    //   if(value instanceof Object) array.push(...recersive(value, `${path}${key}.`));
    //   else if(typeof value === 'string' && value.includes(needle)) array.push(`${path}${key}`) 
    // }
    // return array;

    /// using Object.keys
    return Object.keys(object).reduce((acc, cur) => {
      if(object[cur] instanceof Object) return acc.concat(recersive(object[cur], `${path}${cur}.`));
      else if(typeof object[cur] === 'string' && object[cur].includes(needle)) return acc.concat(`${path}${cur}`);
      return acc;
    }, []);
  }
  return recersive(haystack, '').sort();
}

module.exports = search;