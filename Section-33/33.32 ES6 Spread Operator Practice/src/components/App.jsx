import React, { useState } from "react";

function App() {
  // save data from input text field
  const [name, addItem] = useState("");
  function handleChange(event) {
    addItem(event.target.value);
  }
  // add the value from input text field to the array
  const [items, setNewItem] = useState([]);
  function handleClick() {
    setNewItem((prevValue) => {
      return [...prevValue, name];
    });
    addItem("");
  }
  var id = 0;
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={name} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
