const sum = require('./main');

describe('array sum test', () => {
  test('[0] returns 0', () => {
    expect(sum([0])).toBe(0);
  });

  test('[1] returns 1', () => {
    expect(sum([1])).toBe(1);
  });

  test('[0,1] returns 1', () => {
    expect(sum([0,1])).toBe(1);
  });

  test('[1, 5.2, 4, 0, -1] returns 9.2', () => {
    expect(sum([1, 5.2, 4, 0, -1])).toBe(9.2);
  });

  test('[-2.398] returns -2.398', () => {
    expect(sum([-2.398])).toBe(-2.398);
  });
});

describe('An empty array sum test', () => {
  test('If an empty array passed it returns 0', () => {
    expect(sum([])).toBe(0);
  });
});