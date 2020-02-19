const initialState = {
    width: 100,
    height: 200,
    color: "#FF00FF"
};

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    console.log("----------------------");
    console.log("entering REDUX reducer.....");
    console.log("in reducer. state is:", state);
    console.log("in reducer. action is:", action);

    const { type, dimension, color } = action;
    // ACTION 1 - Increment dimension by 10
    if (type == "SIZE") {
        let newState = {
            ...state,
            [dimension]: state[dimension] + 10
        }
        console.log("in reducer. returning newState:", newState);
        return newState;
    }
    // ACTION 2 - Change the color
    if (type == "COLOR") {
        let newState = {...state, color };
        console.log("in reducer. returning newState:", newState);
        return newState;
    }

    console.log("in reducer. we did not change the state");
    return state;
}