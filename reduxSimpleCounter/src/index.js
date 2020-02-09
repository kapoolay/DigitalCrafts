const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer);

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()))

// Dispatch the "INCREMENT" action every time the +1 button is pressed
const incrementButton = document.getElementById('increment');
incrementButton.addEventListener('click', e => dispatch({ type: "CHANGEVALUE", value: 1 }));


const incrementButton5 = document.getElementById('increment5');
incrementButton5.addEventListener('click', e => dispatch({ type: "CHANGEVALUE", value: 5 }));

// Dispatch the "DECREMENT" action every time the -1 button is pressed
const decrementButton = document.getElementById('decrement');
decrementButton.addEventListener('click', e => dispatch({ type: "CHANGEVALUE", value: -1 }));

const decrementButton5 = document.getElementById('decrement5');
decrementButton5.addEventListener('click', e => dispatch({ type: "CHANGEVALUE", value: -5 }));

const colorDropdown = document.getElementById('colors');
colorDropdown.addEventListener('change', e => dispatch({ type: "CHANGECOLOR", color: colorDropdown.value }));

const startNumber = document.getElementById('whateverIWant');
startNumber.addEventListener('input', e => dispatch({ type: "RESETVALUE", value: parseInt(e.target.value) }));