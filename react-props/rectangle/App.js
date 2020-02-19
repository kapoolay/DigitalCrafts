// Render the rectangle using React!
const App = (props) => {
    console.log("----------------------");
    console.log("in 'App' React Component. props is ", props)
    
    let {rectangle} = props;
   
    let myStyle = {
        width: rectangle.width,
        height: rectangle.height,
        backgroundColor : rectangle.color
    }

    return (
        <div style={myStyle}></div>
    )
}
