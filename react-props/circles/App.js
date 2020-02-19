// Render the circles using React!
const App = (props) => {
    let { circles } = props;
    
    let circleComponents = circles.map( (circle, arrayIndex) => {
        return <Circle circle={circle} key={arrayIndex}/> 
    });

    return <div>{circleComponents}</div>
}