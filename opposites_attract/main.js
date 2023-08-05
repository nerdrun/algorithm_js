function lovefunc(flower1, flower2){
  return (flower1 + flower2) % 2 !== 0; 
  return (flower1 + flower2) % 2 === 1; // this line seems more explicit than line 2.

  return flower1 % 2 !== flower2 % 2; // this one is more understandable than the others above.
}

module.exports = lovefunc;