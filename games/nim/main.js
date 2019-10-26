/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~STATE~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

let nim = 0;
let playerNim = 0;


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~MAIN FUNCTION~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function buttonClicked () {
    let clickedButton = event.target;

    valueHTML();

}




/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~RENDER FUNCTIONS~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

function valueHTML () {
    let input = document.getElementById('takeInput');
    let value = parseInt(input.value);

    nim += value;

    console.log(nim);
}



var content = document.getElementById('content');
content.innerHTML = renderGame(nim);

function renderGame(game) {
    // Change this render function to use the "game" parameter

    return `
        <div class="container d-flex flex-column justify-content-start align-items-center">
            <h4>There are 16 pebbles left</h4>
            <div class="w-50 text-center pebble-container">
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
                <div class="pebble"></div>
            </div>
            <h4 class="mt-5">It's player 1's turn! How many pebbles will you take?</h4>
            <div>
                <select id="takeInput">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button class="btn btn-primary" onClick="buttonClicked()">Take</button>
            </div>
        </div>
    `
}