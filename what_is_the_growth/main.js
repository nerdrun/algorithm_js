function getGrowth(...args){

  /// Clever way
  let res = [], p = args[0];

  for(let c of args) {
    res.push(`${c} (${formatSignedInt(c - p)}, ${formatSignedInt(100 * c / p - 100)}%)`);
    p = c;
  }
  return res.join(', ');

  /// ES6
  return args.reduce((acc, cur, idx, arr) => {
    if(idx > 0) acc += ', ';
    let difference = cur - (arr[idx - 1] ?? cur);
    let percentage = Math.round((difference / (arr[idx - 1] ?? 1)) * 100);
    if(difference >= 0) difference = `+${difference}`
    if(percentage >= 0) percentage = `+${percentage}`
    return acc += `${cur} (${difference}, ${percentage}%)`;
  }, '');


  /// for loop
  let result = `${args[0]} (+0, +0%)`;

  for(let i = 1; i < args.length; i++) {
    result += ', ';
    let difference = args[i] - args[i - 1];
    let percentage = Math.round((difference / args[i - 1]) * 100);
    if(difference >= 0) difference = `+${difference}`
    if(percentage >= 0) percentage = `+${percentage}`
    result += `${args[i]} (${difference}, ${percentage}%)`;
  }
  return result;
}

function formatSignedInt(n) {
  return (n >= 0 ? '+' : '') + Math.round(n);
}

module.exports = getGrowth;