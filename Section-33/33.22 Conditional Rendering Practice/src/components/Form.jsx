import React from "react";
import Button from "./Button";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {props.type == "Register" && (
        <input type="password" placeholder="Confirm Password" />
      )}
      <Button type={props.type} />
    </form>
  );
}

export default Form;
