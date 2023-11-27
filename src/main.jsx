import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router.jsx";
import "./index.css";
import App from "./components/App.jsx";
import { ErrorBoundary } from "react-error-boundary";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
    {/* <ErrorBoundary>
      <App />
    </ErrorBoundary> */}
  </React.StrictMode>
);
