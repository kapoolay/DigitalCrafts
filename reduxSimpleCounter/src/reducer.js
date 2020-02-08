const initialState = {
    value: 0,
    colors: ""
}

const reducer = (state = initialState, action) => {
    let { type } = action;
    if (type === "INCREMENT") {
        return {
            value: state.value + 1,
            colors: state.colors = colorsDropdown.value
        }
    } else if (type === "DECREMENT") {
        return {
            value: state.value -1,
            colors: state.colors = colorsDropdown.value
        }
    } else if (type === "add5") {
        return {
            value: state.value + 5,
            colors: state.colors = colorsDropdown.value
        }
    } else if (type === "subtract5") {
        return {
            value: state.value -5,
            colors: state.colors = colorsDropdown.value
        }
    } else if (type === "colors") {
        return {
            value: state.value,
            colors: state.colors = colorsDropdown.value
        }
    }
    return state
}