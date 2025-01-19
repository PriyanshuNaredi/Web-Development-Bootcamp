import React from "react";

function App() {
  let time = new Date().toLocaleTimeString().substring(0, 7);
  console.log(time);
  const [Time, getTime] = React.useState("TIME");

  function getCurrTime() {
    getTime(time);
  }

  setInterval(getCurrTime, 1000);

  return (
    <div className="container">
      <h1>{Time}</h1>
      <button onClick={getCurrTime}>Get Time</button>
    </div>
  );
}

export default App;
