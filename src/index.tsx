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
import { Analytics } from "@vercel/analytics/react";
import MobilePayment from "./pages/MobilePayment";
import NotFound from "./pages/NotFound";

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
          <Route path="/payement-mobile-money" element={<MobilePayment />} />
          <Route path="/confirmation-payement" element={<MobilePayment />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </React.StrictMode>
  );
}
