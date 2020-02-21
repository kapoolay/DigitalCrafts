const Circle = props => {
  let { circle } = props;

  let diameter = circle.radius * 2;

  let circleStyle = {
    height: diameter,
    width: diameter,
    backgroundColor: circle.color,
    borderRadius: circle.radius
  };

  let handleClick = () => {
    reduxStore.dispatch({
      type: "REMOVE_CIRCLE",
      ID: uniqueId
    })
  }

  return <div style={circleStyle} onClick={handleClick} />
};
