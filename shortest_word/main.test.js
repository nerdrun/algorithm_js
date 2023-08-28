const findShort = require('./main');

test('the shortest length of hello is 5', () => {
  expect(findShort('hello')).toBe(5);
});

test('the shortest length of doom is 4', () => {
  expect(findShort('doom')).toBe(4);
});

test('the shortest length of hello doom is 4', () => {
  expect(findShort('hello doom')).toBe(4);
});

test('the shortest length of bitcoin take over the world maybe who knows perhaps is 3', () => {
  expect(findShort('bitcoin take over the world maybe who knows perhaps')).toBe(3);
});

test('the shortest length of Let\'s travel abroad shall we is 2', () => {
  expect(findShort('Let\'s travel abroad shall we')).toBe(2);
});
