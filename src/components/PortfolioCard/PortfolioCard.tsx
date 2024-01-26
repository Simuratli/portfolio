import React from "react";
import PortfolioCardBorder from "../../assets/portfolioCardBorder";
import { Link } from "react-router-dom";
import URLIcon from "../../assets/images/url.svg";

const PortfolioCard = () => {
  return (
    <div className="portfolioCard">
      <PortfolioCardBorder className="portfolioCard__border" />
      <div className="portfolioCard__image">
        <img
          src="https://help.behance.net/hc/article_attachments/360099180953/Screen_Shot_2020-11-10_at_11.14.38_AM.png"
          alt=""
        />
      </div>

      <div className="portfolioCard__content">
        <div className="portfolioCard__text">
          <h1>Portfolio design</h1>
          <p>UI design - User research - webflow develop</p>
        </div>
        <Link className="portfolioCard__url" to="/">
          <img src={URLIcon} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard;
