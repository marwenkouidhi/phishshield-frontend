import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { GlobalStore } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalStore>
    <App />
  </GlobalStore>
);
