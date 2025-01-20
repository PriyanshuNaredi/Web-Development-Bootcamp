import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./../public/styles.css";

ReactDOM.render(<App />, document.getElementById("root"));

// ES6 Spread Opereator
const citrus = ["Lime", "Lemon", "Orange"];
const fruits = ["Apple", "Banana", "Coconut", ...citrus];
console.log(fruits);

const fullName = {
  fName: "James",
  lName: "Bond",
};
const user = {
  fullName,
  id: 1,
  username: "jamesbond007",
};
console.log(user);

const user_SpreadOperator_ES6 = {
  ...fullName,
  id: 1,
  username: "jamesbond007",
};
console.log(user_SpreadOperator_ES6);
