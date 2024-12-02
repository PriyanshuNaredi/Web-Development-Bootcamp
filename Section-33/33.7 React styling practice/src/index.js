//Create a React app from scratch.
import React from "react";
import reactDom from "react-dom";
import ReactDOM from "react-dom";

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.

//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

var msg = "";
var msgClass = "";
const now = new Date(2024, 1, 1, 17);
const hour = now.getHours();

if (hour < 12) {
  msg = "Good Morning";
  msgClass = "morning";
} else if (hour < 18) {
  msg = "Good Afternoon";
  msgClass = "afternoon";
} else {
  msg = "Good Night";
  msgClass = "night";
}
ReactDOM.render(
  <div>
    <h1 className={"heading " + msgClass}>
      {msg} and the current time is {hour}
    </h1>
  </div>,
  document.getElementById("root")
);
