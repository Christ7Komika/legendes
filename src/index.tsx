import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router";

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}
