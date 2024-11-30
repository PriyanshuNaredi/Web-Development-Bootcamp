//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

//It should display a h1 heading.
ReactDOM.render(<h1> H1 Heading </h1>, document.getElementById("root"));

//It should display an unordered list (bullet points).
//It should contain 3 list elements.
ReactDOM.render(
  <div>
    <h1> H1 Heading </h1>
    <ul>
      <li> list item </li>
      <li> list item </li>
      <li> list item </li>
    </ul>
  </div>,
  document.getElementById("root")
);
