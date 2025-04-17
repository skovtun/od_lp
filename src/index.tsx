import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LandingPageScreen } from "./screens/LandingPageScreen";
import "./styles/animations.css";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <LandingPageScreen />
  </StrictMode>,
);