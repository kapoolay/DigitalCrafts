const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer);

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()))

// Dispatch the "INCREMENT" action every time the +1 button is pressed
const incrementButton = document.getElementById('increment');
incrementButton.addEventListener('click', e => dispatch({ type: "INCREMENT" }));


// Dispatch the "DECREMENT" action every time the -1 button is pressed
const decrementButton = document.getElementById('decrement');
decrementButton.addEventListener('click', e => dispatch({ type: "DECREMENT" }));


// Dispatch the "plus5" action every time the +5 button is pressed
const add5Button = document.getElementById('add5');
add5Button.addEventListener('click', e => dispatch({ type: "add5" }));


// Dispatch the "subtract5" action every time the -5 button is pressed
const subtract5Button = document.getElementById('subtract5');

subtract5Button.addEventListener('click', e => dispatch({ type: "subtract5" }));


// Dispatch color of the counter based on the dropdown selection
const colorsDropdown = document.getElementById('colors');

colorsDropdown.addEventListener('change', e => dispatch({ type: "colors"}));


// Dispatch counter value to be the same as input of text area
const changeValue = document.getElementById('counterValue');

var textValue = document.getElementById("textArea").value;

