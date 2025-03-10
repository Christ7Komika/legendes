import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Buy from "./pages/Buy";
import Cart from "./pages/Cart";

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}
