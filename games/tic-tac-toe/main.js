/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
1) Update the State 
2) Render 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~STATE~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var ticTacToe = [
    ["-","-","-"],  //row 0
    ["-","-","-"],  //row 1
    ["-","-","-"],  //row 2
]

let isPlayerXTurn = false;

gameCount = 0;



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~MAIN FUNCTION~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function buttonClicked(event) {
    // console.log(event);

    let clickedButton = event.target;
    let clickedButtonId = clickedButton.id; // "1,2"

    let rowIndex = clickedButtonId[0];
    let columnIndex = clickedButtonId[2];

    //update the state
    if (getCurrentHTML(rowIndex, columnIndex) === "-") {
        let idPlayer = document.getElementById('playerTurn');
        if (isPlayerXTurn) {
            ticTacToe[rowIndex][columnIndex] = 'X';
            isPlayerXTurn = false;
            idPlayer.innerHTML = "It's player X's turn!";
            winner();
        } else {
            // it is "O's" Turn
            ticTacToe[rowIndex][columnIndex] = 'O';
            isPlayerXTurn = true;
            idPlayer.innerHTML = "It's player O's turn!";
            winner();
        }
    
        renderCell(rowIndex, columnIndex);
        
    
        console.log(clickedButtonId);
    }
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~RENDER FUNCTIONS~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function renderCell(row, column) {
    let id = `${row},${column}`;

    let button = document.getElementById(id);
    button.innerHTML = ticTacToe[row][column];
    console.log(button);
}

function getCurrentHTML(row, column) {
    let id = `${row},${column}`;

    let button = document.getElementById(id);
    return button.innerHTML;
}




//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~WINNING CONDITIONS~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function winner () {
    if (
        // row
        ticTacToe[0][0]+ticTacToe[0][1]+ticTacToe[0][2] === 'XXX' ||
        ticTacToe[1][0]+ticTacToe[1][1]+ticTacToe[1][2] === 'XXX' ||
        ticTacToe[2][0]+ticTacToe[2][1]+ticTacToe[2][2] === 'XXX' ||
        // columns
        ticTacToe[0][0]+ticTacToe[1][0]+ticTacToe[2][0] === 'XXX' ||
        ticTacToe[0][1]+ticTacToe[1][1]+ticTacToe[2][1] === 'XXX' ||
        ticTacToe[0][2]+ticTacToe[1][2]+ticTacToe[2][2] === 'XXX' ||
        // diagonal
        ticTacToe[0][0]+ticTacToe[1][1]+ticTacToe[2][2] === 'XXX' ||
        ticTacToe[0][2]+ticTacToe[1][1]+ticTacToe[2][0] === 'XXX' ) {
            document.getElementById('winner').innerHTML ='Player X Wins!';
    } 
    if (
        // row
        ticTacToe[0][0]+ticTacToe[0][1]+ticTacToe[0][2] == 'OOO' ||
        ticTacToe[1][0]+ticTacToe[1][1]+ticTacToe[1][2] === 'OOO' ||
        ticTacToe[2][0]+ticTacToe[2][1]+ticTacToe[2][2] === 'OOO' ||
        // columns
        ticTacToe[0,0]+ticTacToe[1,0]+ticTacToe[2][0] === 'OOO' ||
        ticTacToe[0,1]+ticTacToe[1,1]+ticTacToe[2][1] === 'OOO' ||
        ticTacToe[0,2]+ticTacToe[1,2]+ticTacToe[2][2] === 'OOO' ||
        // diagonal
        ticTacToe[0][0]+ticTacToe[1][1]+ticTacToe[2][2] === 'OOO' ||
        ticTacToe[0][2]+ticTacToe[1][1]+ticTacToe[2][0] === 'OOO' ) {
            document.getElementById('winner').innerHTML ='Player O Wins!';
    }
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~RESET GAME~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function reset () {
    document.location.reload();
}





//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~~~HTML~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var content = document.getElementById('content');
content.innerHTML = renderGame(ticTacToe);

function renderGame(game) {
    // Change this render function to use the "game" parameter

    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4 id='playerTurn'>It's player O's turn!</h4>
            <div class="w-50 text-center">
                <button id='0,0' onClick="buttonClicked(event)">${game[0][0]}</button>
                <button id='0,1' onClick="buttonClicked(event)">${game[0][1]}</button>
                <button id='0,2' onClick="buttonClicked(event)">${game[0][2]}</button>
            </div>
            <div class="w-50 text-center">
                <button id='1,0' onClick="buttonClicked(event)">${game[1][0]}</button>
                <button id='1,1' onClick="buttonClicked(event)">${game[1][1]}</button>
                <button id='1,2' onClick="buttonClicked(event)">${game[1][2]}</button>
            </div>
            <div class="w-50 text-center">
                <button id='2,0' onClick="buttonClicked(event)">${game[2][0]}</button>
                <button id='2,1' onClick="buttonClicked(event)">${game[2][1]}</button>
                <button id='2,2' onClick="buttonClicked(event)">${game[2][2]}</button>
            </div>
            <h4 id='winner'></h4>
            <button onClick='reset()' style="width:100px;">Reset</button>
            <h3 id="gameCount"></h3>
        </div>
    `
}