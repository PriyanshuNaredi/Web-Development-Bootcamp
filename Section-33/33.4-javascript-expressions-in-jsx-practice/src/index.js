//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
var fname = "Priyanshu";
var lname = "Naredi";
var currYear = new Date().getFullYear();
ReactDOM.render(
  <div>
    <p>
      {" "}
      Created by {fname} {lname}.
    </p>
    <p>Copyright {currYear}.</p>
  </div>,
  document.getElementById("root")
);
