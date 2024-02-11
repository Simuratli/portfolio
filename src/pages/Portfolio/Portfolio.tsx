import React from "react";
import { Portfolio } from "../../containers";
import Transition from "../../animation/Transition";

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
