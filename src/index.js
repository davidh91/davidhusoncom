import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Contact from "./pages/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const WorkContext = createContext();
export const TriggerContext = createContext();

root.render(
  <React.StrictMode>
    {/* Make sure basename matches your github repo to work with gh-pages */}
    <BrowserRouter>
      <Routes>
        <Route path="" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
