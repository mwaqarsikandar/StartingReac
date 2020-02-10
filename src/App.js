import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";

function Hi() {
  return <div>Hello World!</div>;
}

ReactDOM.render(<Hi/>, document.querySelector('#root'));


export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandkbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
