var min = function(list){
  // return Math.min(...list);
  // const getMin = (acc,cur) => Math.min(acc,cur);
  // return list.reduce(getMin);

  let minimum = list[0];
  for(let i = 0; i < list.length; i++) {
    if(minimum > list[i]) minimum = list[i];
  }
  return minimum;
}

var max = function(list){
  // return Math.max(...list);
  // const getMax = (acc,cur) => Math.max(acc,cur);
  // return list.reduce(getMax);

  let maximum = list[0];
  for(let i = 0; i < list.length; i++) {
    if(maximum < list[i]) maximum = list[i];
  }
  return maximum;
}

module.exports = { min, max };