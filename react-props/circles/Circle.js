const Circle = props => {
  let { circle } = props;

  let diameter = circle.radius * 2;

  let circleStyle = {
    height: diameter,
    width: diameter,
    backgroundColor: circle.color,
    borderRadius: circle.radius
  };

  return <div style={circleStyle} />
};
