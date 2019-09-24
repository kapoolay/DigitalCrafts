/*
Rock Paper Scissors

Write a function rockPaperScissors which takes the throw of player 1 and the throw of player 2. A throw can have the values of 'rock', 'paper', or 'scissors'. It will return 'player 1' if player 1 wins, 'player 2' if player 2 wins, and 'draw' if there is no winner.

> rockPaperScissors('rock', 'scissors')
'player 1'
> rockPaperScissors('rock', 'paper')
'player 2'
> rockPaperScissors('paper', 'paper')
'draw'
*/

function rockPaperScissors(player1, player2)  {
    if (player1 === 'rock') {
        if (player2 === 'paper') {
            return 'Player 2 wins!';
        } else if (player2 === 'scissors') {
            return 'Player 1 wins!';
        } else {
            return 'Draw!';
        }
    } else if (player1 === 'paper') {
        if (player2 === 'rock') {
            return 'Player 1 wins!';
        } else if (player2 === 'scissors') {
            return 'Player 2 wins!';
        } else {
            return 'Draw!';
        }
    } else if (player1 === 'scissors') {
        if (player2 === 'rock') {
            return 'Player 2 wins!';
        } else if (player2 === 'paper') {
            return 'Player 1 wins!';
        } else {
            return 'Draw!';
        }
    }
}

/* Luis's Solution
function rockPaperScissors(player1, player2) {
  if (player1 == player2) {
    return "draw";
  } else if (
    (player1 == "rock" && player2 == "scissors") ||
    (player1 == "paper" && player2 == "rock") ||
    (player1 == "scissors" && player2 == "paper")
  ) {
    return "player1";
  } else {
    return "player2";
  }
}
*/

console.log(rockPaperScissors('scissors', 'rock'));