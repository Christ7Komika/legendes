import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Buy from "./pages/Buy";
import Cart from "./pages/Cart";
import CompletedPayment from "./pages/CompletedPayment";
import FailedPayment from "./pages/FailedPayment";
import Contact from "./pages/Contact";

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boutique" element={<Buy />} />
          <Route path="/panier" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/telecharger" element={<CompletedPayment />} />
          <Route path="/payement-echoue" element={<FailedPayment />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}
