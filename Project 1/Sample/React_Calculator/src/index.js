import React from "react";
import ReactDOM from "react-dom";
import { add, multiply, divide, subtract } from "./Calculator";

ReactDOM.render(
  // Welcome to Calculator
  <ul>
    <li>{add(1, 2)}</li>
    <li>{multiply(1, 2)}</li>
    <li>{divide(1, 2)}</li>
    <li>{subtract(1, 2)}</li>
  </ul>,
  document.getElementById("root")
);
