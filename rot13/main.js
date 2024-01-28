function rot13(str) {
  return [...str].reduce((acc, cur) => {
    const charCode = cur.toUpperCase().charCodeAt(0) - 65;
    return ((0 <= charCode && charCode <= 25) ? acc += String.fromCharCode(cur.charCodeAt(0) + (charCode >= 13 ? -13 : 13)) : acc += cur, acc);

    /// Readable
    let operator = 0; 
    if(0 <= charCode && charCode <= 25) operator = charCode >= 13 ? -13 : 13;
    acc += String.fromCharCode(cur.charCodeAt(0) + operator);
    return acc;
  }, '');
}

module.exports = rot13;