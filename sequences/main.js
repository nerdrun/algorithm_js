function findCombos(array) {
  if(array.length <= 1) return 1;

  const result = [];
  for(let i = 0; i < array.length; i++) { 
    let curr = array.slice();
    let next = curr.splice(i, 1);
    let m = [].concat(next);
    for(let j = 0; j < curr.length; j++) {
      let jCurr = curr.slice(); 
      let next = jCurr.splice(j, 1); 
      m = m.concat(next);
      for(let k = 0; k < jCurr.length; k++) {
        let kCurr = jCurr.slice();
        let next = kCurr.splice(k, 1);
        m = m.concat(next);
        result.push(m);
      }
    }
  }
  console.log('result : ', result);

  return result.length;
}

module.exports = findCombos;