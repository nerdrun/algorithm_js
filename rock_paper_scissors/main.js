const rps = (p1, p2) => {
  let result = 'Player 1 won!';

  if(p1 === p2) result = 'Draw!';

  if(p2 === 'rock' && p1 === 'scissors') result = 'Player 2 won!';
  else if(p2 === 'scissors' && p1 === 'paper') result = 'Player 2 won!';
  else if(p2 === 'paper' && p1 === 'rock') result = 'Player 2 won!';


  /// This is also a great solution. It merges two words and compare it.
  // return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`;

  return result;
};

module.exports = rps;