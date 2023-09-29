function sumDigPow(a, b) {
  let result = [];

  for(let i = a, j = 0; i <= b; i++, j++) {
    let sum = 1;
    for(let k = 0; k < (j + 1); k++) {
      sum *= a;
    }
    console.log('sum : ', sum);
    result.push(sum);
  }
  // if(split.length > 0) {
  //   let test = 1;
  //   for(let i = 0; i < 1; i++) {
  //     test *= +split[0];
  //   }
  //   result += test;
  // }
  // if(split.length > 1) {
  //   let test = 1;
  //   for(let i = 0; i < 2; i++) {
  //     test *= +split[1];
  //   }
  //   result += test;
  // }
  // if(split.length > 2) {
  //   let test = 1;
  //   for(let i = 0; i < 3; i++) {
  //     test *= +split[2];
  //   }
  //   result += test;
  // }
  return result;
  // for(let i = a; i <= b; i++) {
  //   const split = i.toString().split('');
  //   result.push(test);
  // }
  // return result;
}

module.exports = sumDigPow;