import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.scss";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Main, About, Portfolio, BlogPage } from "./pages";
import { Navbar, Footer, Seo } from "components";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <BrowserRouter>
    <Seo />
    <Navbar />
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/blog" element={<BlogPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
);
