import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router.jsx";
import "./index.css";
import App from "./components/App.jsx";
// import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Router /> */}
    {/* <ErrorBoundary> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* </ErrorBoundary> */}
  </React.StrictMode>
);
