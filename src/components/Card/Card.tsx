import React from "react";
import { CardPropTypes } from "./Card.types";

const Card = ({ children }: CardPropTypes) => {
  return <div className="card">{children}</div>;
};

export default Card;
