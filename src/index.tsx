import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.scss";
import App from "./App";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { Navbar, Footer } from "components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
);
