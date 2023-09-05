const isValidWalk = require('./main');

describe('the length of array must be 10', () => {
  test("[w,w,w] returns false", () => {
    expect(isValidWalk(['w','w','w'])).toBe(false);
  });
  test("['n','s','n','s','n','s','n','s','n','s'] returns true", () => {
    expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])).toBe(true);
  });
  test("['w','e','w','e','w','e','w','e','w','e','w','e'] returns false", () => {
    expect(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])).toBe(false);
  });
});

describe('each horizontal and vertical elements\' counts must be equal', () => {
  test('The east and the west pairs must be equal', () => {
    expect(isValidWalk(['w','e','w','e','w','e','w','e','w','e',])).toBe(true);
  });
  test('The east and the west pairs must be equal', () => {
    expect(isValidWalk(['w','e','w','e','w','e','w','e','e','e'])).toBe(false);
  });
  test('The north and the south pairs must be equal', () => {
    expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])).toBe(true);
  });
  test('The north and the south pairs must be equal', () => {
    expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])).toBe(true);
  });
  test('The north and the south pairs must be equal', () => {
    expect(isValidWalk(['n','s','n','s','n','s','n','n','n','n'])).toBe(false);
  });
  test('The north and the south pairs must be equal', () => {
    expect(isValidWalk(['n','n','n','n','n','s','s','s','s','s'])).toBe(true);
  });
  test('The north and the south pairs must be equal', () => {
    expect(isValidWalk(['n','n','n','n','n','s','s','s','s','n'])).toBe(false);
  });
});