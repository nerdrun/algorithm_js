function arrayDiff(a, b) {
  /// Optimal solution
  b = new Set(b)
  return a.filter(v => !b.has(v))

  /// ES6
  return a.filter(val => !b.includes(val));
  return a.filter(val => b.indexOf(val) < 0);

  /// for loop
  for(let i = 0; i < a.length; i++) {
    for(let j = 0; j < b.length; j++) {
      if(a[i] === b[j]) {
        a.splice(i, 1);
        i--;
      }
    }
  }

  return a;
}

module.exports = arrayDiff;