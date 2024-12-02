import React from "react";
import ReactDOM from "react-dom";

// default can be remaned to any thing the index.js
// but non-default function should not be renamed to anything else
import pie, { doublePi, quadruplePi } from "./math.js";
ReactDOM.render(
  <ul>
    <li>{pie}</li>
    <li>{doublePi()}</li>
    <li>{quadruplePi()}</li>
  </ul>,
  document.getElementById("root")
);

import * as pi from "./math";
ReactDOM.render(
  <ul>
    <li>{pi.default}</li>
    <li>{pi.doublePi()}</li>
    <li>{pi.quadruplePi()}</li>
  </ul>,
  document.getElementById("root")
);
