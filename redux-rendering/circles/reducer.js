const initialState = [
    {
        radius: 50,
        color: "#FF00FF"
    },
    {
        radius: 30,
        color: "#FF99AA"
    },
    {
        radius: 60,
        color: "#0000FF"
    },
    {
        radius: 10,
        color: "#000000"
    },
];

function deepClone(someObject) {
    return JSON.parse(JSON.stringify(someObject))
};

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    if (type === "ADD_CIRCLE") {
        // make a copy of the state and add a circle to the copy
        let newState = deepClone(state);
        newState.push({
            radius: 50,
            color: "#000000"
        });
        return newState;
    } else {
        return state;
    }
    // ACTION: Add a random circle

    return state;
}