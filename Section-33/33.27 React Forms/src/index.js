import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./../public/styles.css";
import Apps from "./components/App_Angela_Sol";

ReactDOM.render(
  <div>
    {" My Sol "}
    <App />
    <hr /> <hr />
    {" Angela Sol "}
    <Apps />
  </div>,
  document.getElementById("root")
);
