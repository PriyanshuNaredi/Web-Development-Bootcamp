import React from "react";
import Form from "./Form";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      {userIsRegistered == true ? (
        <Form type="Login" />
      ) : (
        <Form type="Register" />
      )}
    </div>
  );
}

export default App;
