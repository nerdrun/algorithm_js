function solution(text, markers) {
  const array = text.split('');
  let result = '';

  for(let i = 0; i < array.length; i++) {
    if(isMarker(array[i], markers)) {
      result = trimEnd(result);
      const lineBreakIndex = findNextLineBreak(array.slice(i));
      if(lineBreakIndex === -1) {
        array.splice(i, (array.length - 1) - i);
      } else {
        array.splice(i, lineBreakIndex - 1);
      }
    } else {
      result += array[i];
    }
  }
  return trimEnd(result);
}

function isMarker(text, markers) {
  return markers.includes(text);
}

function trimEnd(text) {
  return text.lastIndexOf(' ') === text.length - 1 ? text.trimEnd() : text;
}

function findNextLineBreak(text) {
  return text.indexOf('\n');
}

module.exports = { solution, isMarker, findNextLineBreak };