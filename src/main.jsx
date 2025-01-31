import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainContent from "./mainContent";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainContent />
  </StrictMode>
);
