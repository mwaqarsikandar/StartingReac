import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function Hi(props) {
  return <div>Hello{props.name} World! WOW</div>;
}

ReactDOM.render(<Hi name="Dave" />, document.querySelector("#root"));
