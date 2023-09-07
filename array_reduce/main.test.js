/// initial test
/// parameter function iteration

describe('initial test', () => {
  test('if initial is passed and function without computating, returns inital value', () => {
    const result = [1].reduce((acc, cur) => acc, 0);
    expect(result).toBe(0);
  });
  test('if initial isn\'t passed and function without computating, returns first element', () => {
    const result = [1].reduce((acc, cur) => acc);
    expect(result).toBe(1);
  });
});

describe('initial test', () => {
  test('adding up of [1,2] returns 3', () => {
    const result = [1,2].reduce((acc, cur) => acc + cur, 0);
    expect(result).toBe(5);
  });
});