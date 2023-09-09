const solution = require('./main');

/// negative number returns 0
/// sums multiple 3
/// sums multiple 3 or 5
/// sums multiple 3 and 5

describe('negative number', () => {
  test('if the parameter is negative number returns 0', () => {
    expect(solution(-10)).toBe(0);
  });
  test('if the parameter is 0 returns 0', () => {
    expect(solution(0)).toBe(0);
  });
});

describe('sums multiple 3', () => {
  test('if the parameter is 4 returns 3', () => {
    expect(solution(4)).toBe(3);
  });
  test('if the parameter is 8 returns 14', () => {
    expect(solution(8)).toBe(14);
  });
});

describe('sums multiple 5', () => {
  test('if the parameter is 6 returns 8', () => {
    expect(solution(6)).toBe(8);
  });
});

describe('sums multiple 3 and 5', () => {
  test('if the parameter is 15 6eturns 60', () => {
    expect(solution(16)).toBe(60);
  });
});

describe('random test', () => {
  test('if the parameter is 10 returns 23', () => {
    expect(solution(10)).toBe(23);
  });
});