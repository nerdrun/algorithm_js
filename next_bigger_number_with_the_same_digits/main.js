function nextBigger(n) {
  const arrayWithNumbers = [...String(n)];
  let index = arrayWithNumbers.findLastIndex((_, index) => arrayWithNumbers[index] > arrayWithNumbers[index - 1])
  if (index <= 0) return -1;

  const [suffle, temp] = [arrayWithNumbers.splice(index).sort(), arrayWithNumbers[arrayWithNumbers.length - 1]];
  
  index = suffle.findIndex(value => value > temp);
  arrayWithNumbers[arrayWithNumbers.length - 1] = suffle[index];
  suffle[index] = temp;
  return +arrayWithNumbers.concat(suffle).join('');

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
