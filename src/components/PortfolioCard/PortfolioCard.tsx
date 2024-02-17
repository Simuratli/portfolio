import React from "react";
import PortfolioCardBorder from "../../assets/portfolioCardBorder";
import { Link } from "react-router-dom";
import URLIcon from "../../assets/images/url.svg";
import { PortfolioCardPropTypes } from "./PortfolioCard.types";

const PortfolioCard = ({
  title,
  image,
  url,
  description,
}: PortfolioCardPropTypes) => {
  return (
    <div className="portfolioCard">
      <PortfolioCardBorder className="portfolioCard__border" />
      <div className="portfolioCard__image">
        <img src={image} alt={title} />
      </div>

      <div className="portfolioCard__content">
        <div className="portfolioCard__text">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <Link className="portfolioCard__url" target="__blank" to={url}>
          <img src={URLIcon} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard;
