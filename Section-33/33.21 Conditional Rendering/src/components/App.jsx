import React from "react";
import Login from "./Login";

var isloggedIn = false;

const currTime = new Date().getHours();

function App() {
  return (
    <div className="container">
      {isloggedIn ? <h1>Hello</h1> : <Login />}

      {/* ternary Operation -> && Operator  */}
      {currTime > 8 ? <h2>its {currTime}</h2> : null}
      {currTime > 8 && <h2>Hello its {currTime}</h2>}
    </div>
  );
}

export default App;
