function findCombos(array) {
  if(array.length <= 1) return 1;

  const result = [];
  for(let i = 0; i < array.length; i++) { 
    const permutated = [];
    const curr = array.slice();
    const next = curr.splice(i, 1);
    permutated.concat(next);
    console.log('next : ', next);
    console.log(permutated);
    /// [1] [2] [3]
    // for(let j = 0; j < curr.length; j++) {
    //   const subCurr = curr.slice();
    //   permutated.concat(subCurr.splice(j, 1))
    // }
    result.push(permutated);
  }

  return result;

  // const flat = array.flat(Infinity).sort((a, b) => a - b)
  // if(flat.length <= 1) return 1;

  // let result = [];
  // const permute = (arr, m = []) => {
  //   if (arr.length === 0) {
  //     result.push(m)
  //   } 
  //   else {
  //     for (let i = 0; i < arr.length; i++) {
  //       let curr = arr.slice();
  //       if(i + 1 < arr.length && curr[i] === curr[i + 1]) continue;
  //       let next = curr.splice(i, 1);
  //       permute(curr.slice(), m.concat(next));
  //     }
  //   }
  // }
  // permute(flat);
  // return result.length;
}

module.exports = findCombos;