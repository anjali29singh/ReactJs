import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
const Main = () => {
  return (
    <>
      <App />
    </>
  );
};
const container = ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
