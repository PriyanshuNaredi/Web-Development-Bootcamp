import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client'
import App from "./components/App";
import "./../public/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // Create a root
root.render(<App />); // Render the App component

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/App";
// import "./../public/styles.css";

// ReactDOM.render(<App />, document.getElementById("root"));
