const convert = require('./main');

test('number to string test', () => {
  expect(convert(3)).toBe('3');
});
