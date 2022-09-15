import React from "react";
import Form from "./Form";

//Change from false to true and check if the User is logged in!
var isUserRegistered = false;
//Console.log(isUserRegistered);
function App() {
  return (
    <div className="container">
      <Form registeredUser={isUserRegistered} />
    </div>
  );
}

export default App;
