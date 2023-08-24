function alphabetPosition(text) {
  /// ES6
  /// This is quite clever way because then don't need to take into account about the case.
  return [...text.replace(/[^a-zA-Z]/g, '')].map(v => v.charCodeAt() % 32).join(' ');
  return [...text.replace(/[^a-zA-Z]+/gi,'').toLowerCase()].map(v => v.charCodeAt() - 96).join(' ');

  /// for loop
  let result = '';
  const lower = text.toLowerCase();
  for(let i = 0; i < lower.length; i++) { 
    const alphabet = lower[i].charCodeAt() - 96;
    if(alphabet >= 1 && alphabet <= 26) result += `${alphabet} `;
  }

  return result.trim();
}

module.exports = alphabetPosition;