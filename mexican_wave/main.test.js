const wave = require('./main');

describe('Mexican wave test with full text', () => {
  test('w returns ["W"]', () => {
    expect(wave('w')).toStrictEqual(['W']);
  });
  test('wa returns ["Wa", "wA"]', () => {
    expect(wave('wa')).toStrictEqual(['Wa','wA']);
  });
  test('c returns ["C"]', () => {
    expect(wave('c')).toStrictEqual(['C']);
  });
  test('ca returns ["Ca", "cA"]', () => {
    expect(wave('ca')).toStrictEqual(['Ca','cA']);
  });
  test('wav returns ["Wav", "wAv", "waV"]', () => {
    expect(wave('wav')).toStrictEqual(['Wav','wAv','waV']);
  });
});