import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [h1_Text, setHeading] = useState("");
  const [isMousedOver, setMouseOver] = useState(false);

  function handle_change(event) {
    setName(event.target.value);
    console.log(event.target.value);
    // console.log(event);
    // console.log(event.target.type);
    // console.log(event.target.placeholder);
  }

  function handleMouseOver() {
    setMouseOver(!isMousedOver);
  }

  function handle_click(event) {
    setHeading(name);
    // console.log({ name });

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {h1_Text} </h1>
      <form onSubmit={handle_click}>
        <input
          onChange={handle_change}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button
          style={{ backgroundColor: isMousedOver ? "Yellow" : "white" }}
          type="submit"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOver}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
