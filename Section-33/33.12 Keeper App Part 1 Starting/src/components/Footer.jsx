import React from "react";
import reactDom from "react-dom";
import ReactDOM from "react-dom";

const date = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p> CopyWrite ©️ {date} </p>
    </footer>
  );
}

export default Footer;
