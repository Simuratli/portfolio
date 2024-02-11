import React from "react";
import {
  Hero,
  Marque,
  Experience,
  Portfolio,
  Blog,
  Contact,
} from "../../containers";
import Transition from "../../animation/Transition";



const Main = () => {
  return (
    <Transition>
      <div>
        <Hero />
        <Marque />
        <Experience />
        <Portfolio />
        <Blog title={"Explore my blog for front-end insights and updates."} />
        <Contact />
      </div>
    </Transition>
  );
};

export default Main;
