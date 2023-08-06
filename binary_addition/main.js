function addBinary(a,b) {
  /// easy way
  return (a + b).toString(2);

  /// while loop
  let binary = '';
  let quotient = a + b;

  if(quotient === 0) return quotient.toString();
  while (quotient !== 0) {
    const reminder = (quotient % 2);
    quotient = Math.floor(quotient / 2);
    binary = `${reminder}${binary}`;
  }

  return binary;
}

module.exports = addBinary;