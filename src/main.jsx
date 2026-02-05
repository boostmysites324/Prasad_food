import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

const getBasename = () => {
  return window.location.pathname.startsWith("/web") ? "/web" : "/";
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={getBasename()}>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>
);
