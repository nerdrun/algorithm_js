function getGrowth(...args){
  let difference = 0;
  let percentage = 0;
  if(args.length > 0) {
    difference = '+0';
    percentage = '+0';
  }
  if(args.length > 1) {
    difference = args[1] - args[0];
    if(difference >= 0) difference = '+' + difference;
    percentage = (args[0] / difference) * 100;
    if(percentage >= 0) percentage = '+' + percentage;
  }
  if(args.length > 2) {
    difference = args[2] - args[1];
    if(difference >= 0) difference = '+' + difference;
    percentage = (args[1] / difference) * 100;
    if(percentage >= 0) percentage = '+' + percentage;
  }
  return `(${difference}, ${percentage}%)`;
}

module.exports = getGrowth;