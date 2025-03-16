import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./styles.css"; // Ensure your styles are imported

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter> {/* ✅ Wrap the App with BrowserRouter */}
      <App />
    </HashRouter>
  </React.StrictMode>
);
