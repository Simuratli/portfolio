import React from "react";
import { MarqueCardPropTypes } from "./MarqueCard.types";
const MarqueCard = ({ text }: MarqueCardPropTypes) => {
  return <div className="marque__card">{text}</div>;
};

export default MarqueCard;
