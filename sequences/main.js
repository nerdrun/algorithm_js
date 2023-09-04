const deepFlatten = arr => Array.isArray(arr) ? arr.flatMap(deepFlatten) : arr;
const factorial = n => n > 1 ? n * factorial(n - 1) : 1;

function findCombos(array) {
  const arr = deepFlatten(array), cnt = arr.reduce((res, k) => (res[k] = res[k] + 1 || 1, res), {});
  return factorial(arr.length) / Object.values(cnt).reduce((a, b) => a * factorial(b), 1);
}

/// This solution has been failed due to timeout (12,000ms) for big array
function findCombos(array) {
  const flat = array.flat(Infinity);
  if(flat.length <= 1) return 1;
  const result = [];
  const premutate = (array, m = []) => {
    if(!array.length && result.findIndex(val => val.toString() === m.toString()) === -1) result.push(m);
    for(let i = 0; i < array.length; i++) {
      const curr = array.slice();
      const next = curr.splice(i, 1);
      premutate(curr, m.concat(next));
    }
  }
  premutate(flat);
  return result.length;
}

module.exports = findCombos;