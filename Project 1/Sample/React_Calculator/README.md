# ReactCalculator
Created with CodeSandbox

## Create a React App from Scratch with Index.Js and Calculator.JS

```
//Calculator.js

function add(a1, a2) {
  return a1 + a2;
}

function subtract(b1, b2) {
  return b1 - b2;
}

function divide(c1, c2) {
  return c1 / c2;
}

function multiply(d1, d2) {
  return d1 * d2;
}

export { add, multiply, subtract, divide };

//Index.js

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

```

## Output

On App execution, the example output should display the result for the add: multiply, divide and subtract calculations! || Get in touch if you have trouble launching the app!

* 3
* 2
* 0.5
* -1


