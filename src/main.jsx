import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//apps
import App from "./assets/App.jsx";
import Login from "./assets/pages/Login.jsx";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
