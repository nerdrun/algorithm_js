const rps = require('./main');

describe('Draw', () => {
  test('rock vs rock return Draw!', () => {
    expect(rps('rock', 'rock')).toBe('Draw!');
  });
});
describe('Player 1 win', () => {
  test('rock vs scissors return Player 1 won!', () => {
    expect(rps('rock', 'scissors')).toBe('Player 1 won!');
  });
  test('scissors vs paper return Player 1 won!', () => {
    expect(rps('scissors', 'paper')).toBe('Player 1 won!');
  });
  test('paper vs rock return Player 1 won!', () => {
    expect(rps('paper', 'rock')).toBe('Player 1 won!');
  });
});
describe('Player 1 win', () => {
  test('scissors vs rock return Player 2 won!', () => {
    expect(rps('scissors', 'rock')).toBe('Player 2 won!');
  });
  test('rock vs paper return Player 2 won!', () => {
    expect(rps('rock', 'paper')).toBe('Player 2 won!');
  });
});