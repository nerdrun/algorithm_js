const high = require('./main');

// describe('simple alphabets comparision', () => {
//   test('a b returns a', () => {
//     expect(high('a b')).toBe('b');
//   });
//   test('b c returns b', () => {
//     expect(high('b c')).toBe('c');
//   });
//   test('a b e returns e', () => {
//     expect(high('a b e')).toBe('e');
//   });
//   test('a b e z returns z', () => {
//     expect(high('a b e z')).toBe('z');
//   });
// });

describe('simple words comparision', () => {
  // test('bc ab returns bc', () => {
  //   expect(high('bc ab')).toBe('bc');
  // });
  // test('ce da returns ce', () => {
  //   expect(high('ce da')).toBe('ce');
  // });
  test('climbing volcano returns volcano', () => {
    expect(high('climbing volcano')).toBe('volcano');
  });
});

describe('complicated words comparision', () => {
  // test('take me to semynak returns semynak', () => {
  //   expect(high('take me to semynak')).toBe('semynak');
  // });
  // test('what time are we climbing up the volcano', () => {
  //   expect(high('what time are we climbing up the volcano')).toBe('volcano');
  // });
});