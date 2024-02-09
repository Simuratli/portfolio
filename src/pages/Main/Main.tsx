import React from "react";
import {
  Hero,
  Marque,
  Experience,
  Portfolio,
  Blog,
  Contact,
} from "../../containers";
const Main = () => {
  return (
    <div>
      <Hero />
      <Marque />
      <Experience />
      <Portfolio />
      <Blog title={"Here’s what my clients are saying about my work"} />
      <Contact />
    </div>
  );
};

export default Main;
