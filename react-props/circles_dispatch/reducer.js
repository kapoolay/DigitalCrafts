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

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type, color, radius, id } = action;
    
    if (type === "ADD_CIRCLE") {
        return [
            ...state,
            { radius, color }
        ]
    } else if (type === "REMOVE_CIRCLE") {

        console.log("will remove circle with id " + id);
        let newState = [...state];
        let arrayIndex = id;
        newState.splice(arrayIndex,1)

        return newState;
    }

    return state;
}