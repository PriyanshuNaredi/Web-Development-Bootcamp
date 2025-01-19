import react from "react";
import React from "react";

function App() {
  const [name, setName] = React.useState("");
  const [isSubmitted, changeSubmitStatus] = React.useState(false);

  function handleChange(event) {
    setName(event.target.value);
    // console.log(event.target.value);
    // console.log(event.target.placeholder);
    // console.log(event.target.type);
  }

  function onSubmit() {
    changeSubmitStatus(true);
  }

  return (
    <div className="container">
      <h1>Hello {isSubmitted ? name : ""}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default App;
