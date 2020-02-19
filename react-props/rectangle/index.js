const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => {
    console.log("----------------------"); 
    console.log("Inside subscriber function (called by REDUX)")
    console.log("Calling ReactDom.render to render 'App' react component");
    
    ReactDOM.render(<App rectangle={getState()} />, document.getElementById('rectangleContainer'))
    
});

dispatch({type: null}); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 
var dimensions = ['height', 'width'];
dimensions.forEach(dimension => {
    document.getElementById(dimension).addEventListener('click', e => {
        
        console.log('----------------------');
        console.log('button clicked. dispatching REDUX action')

        dispatch({
            type: 'SIZE',
            dimension
        })
    })
})

var colors = ['red', 'blue']
colors.forEach(color => {
    document.getElementById(color).addEventListener('click', e => {
        
        console.log('----------------------');
        console.log('button clicked. dispatching REDUX action')
        
        dispatch({
            type: 'COLOR',
            color
        })
    })
})
