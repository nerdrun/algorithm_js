const getCount = require('./main');

describe('Vowels Count Tests', () => {
  test('a returns 1', () => {
    expect(getCount('a')).toBe(1);
  });

  test('aa returns 2', () => {
    expect(getCount('aa')).toBe(2);
  });

  test('aae returns 3', () => {
    expect(getCount('aae')).toBe(3);
  });

  test('aab returns 2', () => {
    expect(getCount('aab')).toBe(2);
  });

  test('aabe returns 3', () => {
    expect(getCount('aabe')).toBe(3);
  });

  test('aabecdi returns 4', () => {
    expect(getCount('aabecdi')).toBe(4);
  });

  test('aabecdizpwo returns 5', () => {
    expect(getCount('aabecdizpwo')).toBe(5);
  });

  test('aabecdizpwoqwrtu returns 6', () => {
    expect(getCount('aabecdizpwoqwrtu')).toBe(6);
  });

  test('abracadabra returns 5', () => {
    expect(getCount('abracadabra')).toBe(5);
  });
});
