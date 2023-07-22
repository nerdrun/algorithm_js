const stringToNumber = function(str) {
  /// Unary Plus (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus)
  /// https://262.ecma-international.org/5.1/#sec-11.4.6
  /// Type conversion http://jibbering.com/faq/notes/type-conversion/
  /// return +str;  /// be aware of that converts also boolean into number, but still clever way.
  return parseInt(str);
}

module.exports = stringToNumber;