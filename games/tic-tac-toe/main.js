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

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// ~~~~~~~~~~~~~FUNCTIONS~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function buttonClicked(event) {
    // console.log(event);

    let clickedButton = event.target;
    let clickedButtonId = clickedButton.id; // "1,2"

    let rowIndex = clickedButtonId[0];
    let columnIndex = clickedButtonId[2];

    //update the state
    if (isPlayerXTurn) {
        ticTacToe[rowIndex][columnIndex] = 'X';
        isPlayerXTurn = false;
    } else {
        // it is "O's" Turn
        ticTacToe[rowIndex][columnIndex] = 'O';
        isPlayerXTurn = true;
    }

    renderCell(rowIndex, columnIndex);

    console.log(clickedButtonId);
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







var content = document.getElementById('content');
content.innerHTML = renderGame(ticTacToe);

function renderGame(game) {
    // Change this render function to use the "game" parameter

    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>It's player O's turn!</h4>
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
        </div>
    `
}