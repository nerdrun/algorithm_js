function removeChar(str){
  // const array = str.split('');
  // array.shift();
  // array.pop();
  // return array.join('');
  return str.slice(1, -1); 
 };

 module.exports = removeChar;