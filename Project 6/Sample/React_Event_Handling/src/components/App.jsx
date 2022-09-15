import React, { useState } from "react";

function App() {
  const [HeadingText, setHeadingText] = useState("Hello");
  const [isMousedOver, setMouseOver] = useState(false);
  function init_click() {
    setHeadingText("NewText");
  }

  function handleMouseOver() {
    setMouseOver(!isMousedOver);
  }

  return (
    <div className="container">
      <h1>{HeadingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMousedOver ? "Yellow" : "white" }}
        onClick={init_click}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOver}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
