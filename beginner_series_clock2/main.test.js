const past = require('./main');

test('the milliseconds of midnight must be 0', () => {
  expect(past(0,0,0)).toBe(0);
});

test('00:00:01 of milliseconds must be 1000', () => {
  expect(past(0,0,1)).toBe(1000);
});

test('00:00:10 of milliseconds must be 10000', () => {
  expect(past(0,0,10)).toBe(10000);
});

test('00:01:01 of milliseconds must be 61000', () => {
  expect(past(0,1,1)).toBe(61000);
});

test('00:20:01 of milliseconds must be 1201000', () => {
  expect(past(0,20,1)).toBe(1201000);
});

test('01:00:00 of milliseconds must be 3600000', () => {
  expect(past(1,0,0)).toBe(3600000);
});