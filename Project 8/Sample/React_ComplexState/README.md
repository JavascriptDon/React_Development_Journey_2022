# Change_Complex_StateInReact
{React Development Journey PT 9}


## Example Code
```
import React, { useState } from "react";

function App() {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");

  function update_F_name(event) {
    const firstname = event.target.value;
    setfName(firstname);
  }
  function update_L_name(event) {
    const lastname = event.target.value;
    setlName(lastname);
  }
  return (
    <div className="container">
      <h1>
        Hello {fName} {lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={update_F_name}
          placeholder="First Name"
          value={fName}
        />
        <input
          name="lName"
          onChange={update_L_name}
          placeholder="Last Name"
          value={lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;



```

## Input

Type Your into the 'First Name','Last Name' , 'Email' text fields provided below.

<img width="237" alt="Capture" src="https://user-images.githubusercontent.com/91548582/143578830-89617f94-ccbd-4ee9-9e0e-b4cc2f290828.PNG">


## Output

The example output for the app should allow the user to type in their first name, last name and email as shown below! || Get in touch if you have trouble launching the app!


<img width="306" alt="Capture" src="https://user-images.githubusercontent.com/91548582/143578983-db2580f4-d67c-4725-a1d1-4a5c73e2e1c6.PNG">


