const Circle = props => {
  
  //console.log("props in circle", props);

  let { circle, uniqueId } = props;
  //console.log("uniqueId is ", uniqueId);
    
  let diameter = circle.radius * 2;

  let circleStyle = {
    height: diameter,
    width: diameter,
    backgroundColor: circle.color,
    borderRadius: circle.radius
  };

  let handleClick = () => {
    //console.log("dispatching redux action")
    //console.log("in handleClick uniqueId is ", uniqueId);
    reduxStore.dispatch({
      type: "REMOVE_CIRCLE",
      id : uniqueId
    })
  }


  //console.log("inside Circle, returning the circle")
  return <div style={circleStyle} onClick={handleClick} />
};
