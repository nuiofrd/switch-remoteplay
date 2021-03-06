import React from "react";
import classes from "./Joystick.module.css";

const Joystick = (props) => {
  let classList = classes.Joystick;
  if (props.pressed) classList += " " + classes.Pressed;
  const styles = {
    transform: `translate(${props.x * 10}px, ${props.y * 10}px)`,
  };
  return <div className={classList} style={styles}></div>;
};

export default Joystick;
