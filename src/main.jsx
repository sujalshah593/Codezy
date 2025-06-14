import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App.jsx";
import { WatchProvider } from "./Youtube/WatchContext.jsx";
import { LikedProvider } from "./Youtube/LikedContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <WatchProvider>
        <LikedProvider>
          <App />
        </LikedProvider>
      </WatchProvider>
  </StrictMode>
);
