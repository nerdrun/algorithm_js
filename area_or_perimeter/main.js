const areaOrPerimeter = function(l , w) {
  return l === w ? l * w : (l + w) * 2;
  
  // let result = 0;
  // if(l === w) result = l * w;
  // else result = (l + w) * 2;
  // return result;
};

module.exports = areaOrPerimeter;