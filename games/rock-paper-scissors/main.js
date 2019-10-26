
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~STATE~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var rockPaperScissors = {
    player: 'none',
    computer: 'none',
    winner: 'No Winner Yet',
}

let choices = ['rock', 'paper', 'scissors'];

let playerWeapon = '';
let computerWeapon ='';

let gameCount = 0;


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~MAIN FUNCTION~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function buttonClicked (event) {

    let clickedButton = event.target;
    let clickedButtonId = clickedButton.id;

    playerChoice();
    computerChoice();
    winner(playerWeapon, computerWeapon);
    gamesPlayed();

    // console.log(clickedButtonId);

}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~RENDER FUNCTIONS~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function playerChoice () {
    let clickedButton = event.target;
    let clickedButtonId = clickedButton.id;

    playerWeapon = clickedButtonId;

    document.getElementById('playersChoice').innerHTML=`You played: <strong>${clickedButtonId}</strong>`;

    // console.log("Player: " + playerWeapon);
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~Random Computer Choice~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



function computerChoice () {
    let clickedButton = event.target;
    let clickedButtonId = clickedButton.id;
    computerWeapon = choices[Math.floor(Math.random() * choices.length)]
    
    document.getElementById('computerChoice').innerHTML=`The computer played: <strong>${computerWeapon}</strong>`;

    // console.log("Computer: " + computerWeapon);
}



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~Winning Condition~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


function winner(player, computer) {
    let result = '';
    if (player == computer) {
        result = "It's a tie";
    } else if (
      (player == "rock" && computer == "scissors") ||
      (player == "paper" && computer == "rock") ||
      (player == "scissors" && computer == "paper")
    ) {
        result = "You Win!";
    } else {
        result = "You lose :(";
    }

    document.getElementById('winner').innerHTML=`${result}`;

    // console.log("Winner: " + result);
  }


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~Number of Games~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function gamesPlayed() {
    gameCount += 1;

    document.getElementById('gameCount').innerHTML=`Games Player: ${gameCount}`;

    console.log(gameCount);
}





var content = document.getElementById('content');
content.innerHTML = renderGame(rockPaperScissors);

function renderGame(game) {
    // Change this render function to use the "game" parameter

    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>Choose your weapon:</h4>
            <div class="w-50 text-center">
                <button class="btn btn-primary" id="rock" onClick="buttonClicked(event)">Rock</button>
                <button class="btn btn-primary" id="paper" onClick="buttonClicked(event)">Paper</button>
                <button class="btn btn-primary" id="scissors" onClick="buttonClicked(event)">Scissors</button>
            </div>
            <div class="d-flex justify-content-center">
                <div class="m-5" id="playersChoice">You played: <b>${rockPaperScissors.player}</b></div>
                <div class="m-5" id="computerChoice">The computer played: <b>${rockPaperScissors.computer}</b></div>
            </div>
            <h1 class="text-center" id="winner">${rockPaperScissors.winner}</h1>
            <h5 class="text-center" id="gameCount"></h5>
        </div>
    `
}