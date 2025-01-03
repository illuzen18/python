import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/nextjs";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);