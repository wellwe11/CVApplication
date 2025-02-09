import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import MainContent from "./components/mainContent";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainContent />
  </StrictMode>
);
