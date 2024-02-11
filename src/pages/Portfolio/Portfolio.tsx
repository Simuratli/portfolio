import React from "react";
import { Portfolio } from "../../containers";
import Transition from "../../animations/Transition";

const PortfolioPage = () => {
  return (
    <Transition>
      <section>
        <Portfolio />
      </section>
    </Transition>
  );
};

export default PortfolioPage;
