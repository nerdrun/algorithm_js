const friend = require('./main');

test('Ryan returns Ryan', () => {
  expect(friend(['Ryan'])).toStrictEqual(['Ryan']);
});

test('Ryan, Hola returns Ryan, Hola', () => {
  expect(friend(['Ryan', 'Hola'])).toStrictEqual(['Ryan', 'Hola']);
});

test('Ryan, Termys, Hola returns Ryan, Hola', () => {
  expect(friend(['Ryan', 'Termys', 'Hola'])).toStrictEqual(['Ryan', 'Hola']);
});

test('Jimm, Cari, aret, truehdnviegkwgvke, sixtyiscooooool returns Jimm, Cari, aret', () => {
  expect(friend(['Jimm', 'Cari', 'aret', 'truehdnviegkwgvke', 'sixtyiscooooool'])).toStrictEqual(['Jimm', 'Cari', 'aret']);
});

test('"Ryan", "Jimmy", "123", "4", "Cool Man" returns Ryan', () => {
  expect(friend(['Ryan', 'Jimmy', '123', '4', 'Cool Man'])).toStrictEqual(['Ryan']);
});
