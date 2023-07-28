const areaOrPerimeter = require('./main');

// test('are length and width the same', () => {
//   expect(areaOrPerimeter(3, 3)).toBe(true);
// });

// test('are length and width the same', () => {
//   expect(areaOrPerimeter(3, 4)).toBe(false);
// });

test('If it is a square returns its area', () => {
  expect(areaOrPerimeter(3, 3)).toBe(9);
});

test('If it is a square returns its area', () => {
  expect(areaOrPerimeter(9, 9)).toBe(81);
});

test('If it is a rectangle returns its perimeter', () => {
  expect(areaOrPerimeter(3, 4)).toBe(14);
});

test('If it is a rectangle returns its perimeter', () => {
  expect(areaOrPerimeter(9, 5)).toBe(28);
});
