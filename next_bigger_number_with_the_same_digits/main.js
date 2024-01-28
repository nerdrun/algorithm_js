function nextBigger(n) {
  const array = [...String(n)];
  let index = array.findLastIndex((_, index) => array[index] > array[index - 1])
  if (index <= 0) return -1;

  const [suffle, temp] = [array.splice(index).sort(), array.at(-1)];
  
  index = suffle.findIndex(value => value > temp);
  array[array.length - 1] = suffle[index];
  suffle[index] = temp;
  return +array.concat(suffle).join('');

  // const getMax = number => {
  //   let array = [];
  //   while (number >= 1) {
  //     array.push(Math.floor(number % 10));
  //     number /= 10;
  //   }
  //   return +array.sort((a, b) => b - a).join('');
  // }
  // const max = getMax(n)
  // for(let i = n + 1; i <= max; i++) {
  //   if(max === getMax(i)) return i
  // }
  // return -1
}

module.exports = nextBigger
