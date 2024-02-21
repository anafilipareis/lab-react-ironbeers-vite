import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

// ReactDOM.createRoot creates a root in the DOM for the React application
// documeny.getElementById("root") retrieves the HTML element with the id "root" to serve as the root container for the app
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <App />
  </Router>
);
