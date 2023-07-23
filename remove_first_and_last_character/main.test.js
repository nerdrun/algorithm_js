const removeChar = require('./main');

test('good returns oo', () => {
  expect(removeChar('good')).toBe('oo');
});

test('morning returns ornin', () => {
  expect(removeChar('morning')).toBe('ornin');
});
