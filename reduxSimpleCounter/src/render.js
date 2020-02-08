const render = (state) => {
    const counterDOM = document.getElementById('counterValue');
    counterDOM.innerHTML = state.value;

    counterDOM.style.color = state.colors
}

// Comment for Push

