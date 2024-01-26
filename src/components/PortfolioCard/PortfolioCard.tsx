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
          src="https://mir-s3-cdn-cf.behance.net/projects/404/2b6152154020263.Y3JvcCwzNDUxLDI3MDAsMTExOSww.png"
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
