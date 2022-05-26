# ReactComponents
Created with CodeSandbox


## Create An Index.js , App.jsx , Heading.jsx, List.jsx.
```
import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";

ReactDOM.render(<App />, document.getElementById("root"));


// App.Jsx

import React from "react";
import Heading from "./Heading";
import List from "./List";

function App() {
  return (
    <div>
      <Heading />
      <List />
    </div>
  );
}
export default App;


//Heading.Jsx
import React from "react";

function Heading() {
  const date = new Date();
  const currentTime = date.getHours();

  let greeting;

  const customStyle = {
    color: ""
  };

  if (currentTime < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Night";
    customStyle.color = "blue";
  }

  return (
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
  );
}

export default Heading;


//List.jsx
import React from "react";

function List() {
  return (
    <ul>
      <li>Grab</li>
      <li>Cook Food</li>
      <li>Dispose</li>
    </ul>
  );
}

export default List;
```

## Output 

Example output as follows. || Get in touch if you have trouble launching the app!

```
Good Afternoon

* Grab Food
* Cook Food
* Eat Food

```

