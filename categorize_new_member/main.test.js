const openOrSenior = require('./main');

// test('a single member [18, 20] returns Open', () => {
//   expect(openOrSenior([18, 20])).toStrictEqual(['Open']);
// });

// test('a single member [54, 4] returns Open', () => {
//   expect(openOrSenior([54, 4])).toStrictEqual(['Open']);
// });

// test('a single member [61, 12] returns Senior', () => {
//   expect(openOrSenior([61, 12])).toStrictEqual(['Senior']);
// });

// test('a single member [55, 4] returns Open', () => {
//   expect(openOrSenior([55, 4])).toStrictEqual(['Open']);
// });

test('the members [[55, 4], [18, 20]] returns ["Open", "Open"]', () => {
  expect(openOrSenior([[55, 4], [18, 20]])).toStrictEqual(['Open', 'Open']);
});

test('the members [[45, 12],[55,21],[19, -2],[104, 20]] returns ["Open", "Senior", "Open", "Senior"]', () => {
  expect(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])).toStrictEqual(['Open', 'Senior', 'Open', 'Senior']);
});

test('the members [[3, 12],[55,1],[91, -2],[53, 23]] returns ["Open", "Open", "Open", "Open"]', () => {
  expect(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]])).toStrictEqual(['Open', 'Open', 'Open', 'Open']);
});