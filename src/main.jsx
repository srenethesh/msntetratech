import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles.css"; // Ensure your styles are imported

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ Wrap the App with BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
