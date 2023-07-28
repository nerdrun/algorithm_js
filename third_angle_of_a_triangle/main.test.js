const otherAngle = require('./main');

test('10,20 returns 150', () => {
  expect(otherAngle(10, 20)).toBe(150);
});

test('60,60 returns 60', () => {
  expect(otherAngle(60, 60)).toBe(60);
});