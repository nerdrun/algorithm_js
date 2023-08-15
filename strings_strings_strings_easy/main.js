/// the shortest way
Boolean.prototype.toString = Number.prototype.toString = Array.prototype.toString = 
function() {
  return `${this}`;
  return JSON.stringify(this);
}

Number.prototype.toString = function() {
  return String(this.valueOf());
}

Boolean.prototype.toString = function() {
  return String(this.valueOf());
}

Array.prototype.toString = function() {
  return `[${this.valueOf().join(',')}]`;
}

const convert = (value) => {
  return value.toString();
}

console.log((3).toString());
console.log(true.toString());
console.log([1,2,3].toString());

module.exports = convert;