import React, { useState } from "react";

function App() {
  const [contact, setFullContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handle_change(event) {
    const { value, name } = event.target;

    setFullContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
    // console.log(value);
    // console.log(name);
  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          name="fName"
          onChange={handle_change}
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          name="lName"
          onChange={handle_change}
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          name="email"
          onChange={handle_change}
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
