import React from "react";
import { Header } from "../../components";
import { HeaderType } from "../../types/global.types";
import SunIcon from "../../assets/sun";
import Line from "../../assets/line";

import { PortfolioCard } from "../../components";
const Portfolio = () => {
  return (
    <section className="portfolioSection">
      <div className="portfolioSection__header">
        <Header type={HeaderType.BIG}>
          <span className="portfolioSection__header__text">
            My Portfolio
            <Line className="portfolioSection__header__line" />
          </span>
          <SunIcon className="portfolioSection__header__sun" />
        </Header>
      </div>
      <div className="portfolioSection__content">
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </div>
    </section>
  );
};

export default Portfolio;
