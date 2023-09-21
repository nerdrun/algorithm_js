function high(x){
  const split = x.split(' ');
  let index = 0;
  const sums = split.map(val => val.split('').reduce((acc, cur) => {
    console.log(cur, ': ', cur.charCodeAt(0));
    console.log('acc : ', acc);
    return acc + cur.charCodeAt(0)
  }, 0));
  return sums;
  sums.forEach((val, idx, arr) => arr[index] < val ? index = idx : index);

  return split[index];
}

module.exports = high;