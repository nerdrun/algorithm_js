const zeroFuel = require('./main');

test('if 2 gallons left and mile per gallon is 25, it\'s possible to reach to pump 50 miles away.', () => {
  expect(zeroFuel(50, 25, 2)).toBe(true);
});

test('if 1 gallons left and mile per gallon is 50, it\'s impossible to reach to pump 100 miles away.', () => {
  expect(zeroFuel(100, 50, 1)).toBe(false);
});

test('if 3 gallons left and mile per gallon is 50, it\'s impossible to reach to pump 100 miles away.', () => {
  expect(zeroFuel(100, 50, 3)).toBe(true);
});