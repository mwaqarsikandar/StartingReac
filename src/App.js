import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function Hi() {
  return <div>Hello World! WOW</div>;
}

ReactDOM.render(<Hi />, document.querySelector("#root"));
