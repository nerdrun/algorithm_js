const colorProbability = require('./main');

test('the probability of picking up a bumpy red marble is 0.57', () => {
  expect(colorProbability('red', 'bumpy')).toBe('0.57');
});

test('the probability of picking up a bumpy yellow marble is 0.28', () => {
  expect(colorProbability('yellow', 'bumpy')).toBe('0.28');
});

test('the probability of picking up a smoothy yellow marble is 0.33', () => {
  expect(colorProbability('yellow', 'smooth')).toBe('0.33');
});
