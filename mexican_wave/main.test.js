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
  test("hello returns ['Hello', 'hEllo', 'heLlo', 'heLlo', 'hellO']", () => {
    expect(wave('hello')).toStrictEqual(['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO']);
  });
});

describe('Mexican wave test with full text and blank', () => {
  test('wa v returns ["Wa v", "wA v", "wa V"]', () => {
    expect(wave('wa v')).toStrictEqual(['Wa v', 'wA v', 'wa V']);
  });
});