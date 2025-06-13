import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App.jsx";
import { WatchProvider } from "../Youtube/WatchContext.jsx";
import { LikedProvider } from "../Youtube/LikedContext.jsx";
import { ThemeProvider } from "../Youtube/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <WatchProvider>
        <LikedProvider>
          <App />
        </LikedProvider>
      </WatchProvider>
    </ThemeProvider>
  </StrictMode>
);
