function isTriangle(a,b,c) {
  /// a mathmatical way
  return a + b > c && a + c > b && c + b > a;

  /// deconstructing assignment (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
  [a, b, c] = [a, b, c].sort((x, y) => x-y);
  return a + b > c;

  if(a <= 0 || b <= 0 || c <= 0) return false;

  /// ES6
  const array = [a, b, c].sort((a, b) => a - b);
  return array.pop() < array.reduce((acc, cur) => acc + cur, 0);

  /// Simple way
  let biggest = a;
  let twoSides = b + c;
  if(biggest < b) biggest = b, twoSides = a + c;
  if(biggest < c) biggest = c, twoSides = a + b;
  return biggest < twoSides;
}

module.exports = isTriangle;