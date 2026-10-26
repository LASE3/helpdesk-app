import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./style/index.css";
import "./style/App.css";
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
