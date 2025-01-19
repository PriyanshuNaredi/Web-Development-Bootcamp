import React from "react";

function App() {
  const [count, setCount] = React.useState(0);
  // var count = 0;

  function increase() {
    setCount(count + 1);
    // count++;
    console.log(count);
  }
  function decrease() {
    setCount(count - 1);
    // count++;
    console.log(count);
  }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
