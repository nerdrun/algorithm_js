function count(string) {
  const test = undefined;
  console.log(!!test + 1);
  return string.split('').reduce((acc, cur) => (acc[cur] += !!acc[cur] + 1, acc), {});

  // const result = {};
  // const split = string.split('');
  // if(split.length) {
  //   for(let i = 0; i < split.length; i++) {
  //     if(result[split[i]]) {
  //       result[split[i]] += 1;
  //     }
  //     else {
  //       result[split[i]] = 1;
  //     }
  //   }
  // }
  // return result;
}

module.exports = count;