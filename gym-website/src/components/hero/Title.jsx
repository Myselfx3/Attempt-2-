import classes from "./title.css";

export default function Title(props) {
  return <h1 className={classes.Container}>{props.children}</h1>;
}