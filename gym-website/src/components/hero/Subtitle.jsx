import React from "react";
import classes from "./subtitle.css";

export default function Subtitle(props) {
  return <h2 className={classes.Container}>{props.children}</h2>;
}
