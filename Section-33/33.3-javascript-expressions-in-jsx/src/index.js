import React from "react";
import ReactDOM from "react-dom";

var fname = "Priyanshu";
var lname = "Naredi";
var num = Math.round(Math.random() * 100);
// only insert expression into {}, i.e constant values
ReactDOM.render(
  <div>
    <h1>
      Hello {fname} {lname}!
    </h1>
    <p> Your lucky no is {num} </p>
  </div>,
  document.getElementById("root")
);

ReactDOM.render(
  <div>
    <h1>Hello {`${fname} ${lname}`}!</h1>
    <p> Your lucky no is {num} </p>
  </div>,
  document.getElementById("root")
);

ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lname}!</h1>
    <p> Your lucky no is {num} </p>
  </div>,
  document.getElementById("root")
);
