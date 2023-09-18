const rentalCarCost = require('./main');

describe('every day 40$ cost adding up test', () => {
  test('1 should return 40', () => {
    expect(rentalCarCost(1)).toBe(40);
  });
  test('2 should return 80', () => {
    expect(rentalCarCost(2)).toBe(80);
  });
});

describe('rent a car more than 3 days, 20$ off test', () => {
  test('3 should return 100', () => {
    expect(rentalCarCost(3)).toBe(100);
  });
  test('4 should return 140', () => {
    expect(rentalCarCost(4)).toBe(140);
  });
  test('5 should return 180', () => {
    expect(rentalCarCost(5)).toBe(180);
  });
});

describe('rent a car more than 7 days, 50$ off test', () => {
  test('7 should return 230', () => {
    expect(rentalCarCost(7)).toBe(230);
  });
  test('8 should return 270', () => {
    expect(rentalCarCost(8)).toBe(270);
  });
});