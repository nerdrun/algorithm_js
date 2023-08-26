const {filter, Node} = require('./main');

// test('[1] filtered by x => true returns [1]', () => {
//   expect(filter(new Node(1), x => true)).toStrictEqual(new Node(1));
// });

// test('[1,2] filtered by x => true returns [1,2]', () => {
//   expect(filter(new Node(1, new Node(2)), x => true)).toStrictEqual(new Node(1, new Node(2)));
// });

// test('[1,2] filtered by x => x === 1 returns [1]', () => {
//   expect(filter(new Node(1, new Node(2)), x => x === 1)).toStrictEqual(new Node(1));
// });

// test('[1,2,3] filtered by x => x <= 2 returns [1,2]', () => {
//   expect(filter(new Node(1, new Node(2, new Node(3))), x => x <= 2)).toStrictEqual(new Node(1, new Node(2)));
// });

test('[1,2,3,4] filtered by x => x <= 3 returns [1,2,3]', () => {
  expect(filter(new Node(1, new Node(2, new Node(3, new Node(4)))), x => x <= 3)).toStrictEqual(new Node(1, new Node(2, new Node(3))))
});

// test('[1,2,3] filtered by x => x === 1 returns [1]', () => {
//   expect(filter(new Node(1, new Node(2, new Node(3))), x => x === 1)).toStrictEqual(new Node(1));
// });