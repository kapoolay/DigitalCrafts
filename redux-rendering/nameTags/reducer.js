const initialState = [
    "Kamilah",
    "Stuart"
];

function deepClone(someObject) {
    return JSON.parse(JSON.stringify(someObject))
};

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    if (type === "ADD_NAME") {
        let newState = state.concat(action.name);
        console.log("returning");
        console.log(newState);
        return newState;
    } 
    // Add a Name Tag

    return state;
}