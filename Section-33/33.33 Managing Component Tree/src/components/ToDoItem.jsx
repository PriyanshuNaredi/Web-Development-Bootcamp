import React from "react";

function TodoItem(props) {
  //   const [isDone, setIsDone] = React.useState(false);
  //   function handleClick() {
  //     setIsDone((preValue) => {
  //       return !preValue;
  //     });
  //   };
  return (
    // <div>
    //   <ul>
    //     {props.items.map((todoItem) => (
    // <li>{todoItem}</li>
    //     ))}
    //   </ul>
    // </div>
    // <div onClick={handleClick}>
    //   <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
    //     {props.text}
    //   </li>
    // </div>
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default TodoItem;
