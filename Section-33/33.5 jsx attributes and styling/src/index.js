import React from "react";
import ReactDOM from "react-dom";

// use HTML Tags by just using Camle Casing

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="flase">
      My Favorite Foods
    </h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  </div>,
  document.getElementById("root")
);

/*
ReactDOM.render(
  <div>
    <h1 className="heading">My Favorite Foods</h1>
    <div>
      <img
        className="food-img"
        src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"
      />
      <img
        className="food-img"
        src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"
      />
      <img
        className="food-img"
        src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg"
      />
    </div>
  </div>,
  document.getElementById("root")
);
*/

const img = "https://picsum.photos/200";
ReactDOM.render(
  <div>
    <h1 className="heading">My Favorite Foods</h1>
    <img src={img + "?grayscale"} alt="random-img" />
  </div>,
  document.getElementById("root")
);
