/*
Old Import 
var React = require("react");
var ReactDOM = require("react-dom");
*/
import React from "react";
import ReactDOM from "react-dom";

// React
// ReactDOM.render(WHAT_TO_SHOW, WHERE_TO_SHOW);
ReactDOM.render(<h1> Hello </h1>, document.getElementById("root"));

// Native Java Script
var h1 = document.createElement("h1");
h1.innerHTML = "Hello World";
document.getElementById("root").append(h1);

ReactDOM.render(
  <div>
    <h1> Hello </h1>
    <p> This is a paragraph </p>
  </div>,
  document.getElementById("root")
);
