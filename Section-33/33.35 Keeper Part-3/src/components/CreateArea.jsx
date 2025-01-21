import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function hadelChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  function handelClick(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          name="title"
          onChange={hadelChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={hadelChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={handelClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
