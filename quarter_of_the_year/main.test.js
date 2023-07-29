const quarterOf = require('./main');

test('January is the 1st quarter', () => {
  expect(quarterOf(1)).toBe(1);
});

test('February is the 1st quarter', () => {
  expect(quarterOf(2)).toBe(1);
});

test('March is the 1st quarter', () => {
  expect(quarterOf(3)).toBe(1);
});

test('April is the 2nd quarter', () => {
  expect(quarterOf(4)).toBe(2);
});

test('June is the 2nd quarter', () => {
  expect(quarterOf(6)).toBe(2);
});

test('July is the 3rd quarter', () => {
  expect(quarterOf(7)).toBe(3);
});

test('November is the 4th quarter', () => {
  expect(quarterOf(11)).toBe(4);
});