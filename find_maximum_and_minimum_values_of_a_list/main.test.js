const { min, max } = require('./main');

test('min: [0] returns 0', () => {
  expect(min([0])).toBe(0);
});

test('min: [0,1] returns 0', () => {
  expect(min([0,1])).toBe(0);
});

test('min: [0,1,-1] returns -1', () => {
  expect(min([0,1,-1])).toBe(-1);
});

test('min: [-52, 56, 30, 29, -54, 0, -110] returns -110', () => {
  expect(min([-52, 56, 30, 29, -54, 0, -110])).toBe(-110);
});

test('max: [0] returns 0', () => {
  expect(max([0])).toBe(0);
});

test('max: [0,1] returns 1', () => {
  expect(max([0,1])).toBe(1);
});

test('max: [0,1,-1] returns 1', () => {
  expect(max([0,1,-1])).toBe(1);
});

test('max: [4,6,2,1,9,63,-134,566] returns 566', () => {
  expect(max([4,6,2,1,9,63,-134,566])).toBe(566);
});