import React, { useState, useEffect } from "react";
function App() {
  const [current_Time, setTime] = useState(new Date());

  useEffect(() => {
    const seconds = setInterval(() => updateTime(), 1000);
    return function cleanup() {
      clearInterval(seconds);
    };
  });

  function updateTime() {
    setTime(new Date());
  }

  return (
    <div className="container">
      <h1>{current_Time.toLocaleTimeString()}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;

// ******************* Try this Code ***************
//
// function App() {

//   setInterval(updateTime, 1000);

//   const now = new Date().toLocaleTimeString();

//   const [time, getTime] = useState(now);

//   function updateTime() {
//     const newTime = new Date().toLocaleTimeString();
//     getTime(newTime);
//   }

//   return (
//     <div className="container">
//       <h1>{time}</h1>
//       <button onClick={updateTime}>Get Time</button>
//     </div>
//   );
// }

// export default App;
